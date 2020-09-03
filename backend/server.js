const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const router = express.Router();
const Schema = mongoose.Schema;

const PORT = 4000;
const DB = "mongodb://localhost/blog";

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
app.listen(PORT, () => console.log(`Server is up and running on port ${ PORT }`) );
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("successfully connected to db"))
        .catch((err) => console.log(err));


const postSchema = new Schema({
    title: { type: String, required: true },
    content:{ type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    createdAt : String
});

const Post = mongoose.model("Post", postSchema);


router.route('/').get((req, res) => res.send(`
    <p>Welcome to the API Rest</p>
    <ul>
        <li> api : <a href='/api'>/api</a></li>
    </ul>
`));

router.route('/api').get((req, res) => res.send(`
    <p>Basic Api Rest</p>
    <ul>
        <li> All Posts : <a href='/api/posts'>/api/posts</a></li>
        <li> Single Post 1 : <a href='/api/posts/5f4f929e33a2f0f1d3975ba9'>/api/posts/:id</a></li>
    </ul>
`));

router.route('/api/posts').get((req, res) => {
    Post.find({}, (error, post) => {
        if(!error) res.status(200).send(post);
        else res.status(400).send(error);
    })
});

router.route('/api/posts/:id').get((req, res) => {
    Post.findById(req.params.id, (error, post) => {
        if(error || !post) res.status(404).send({error: true, message: 'Post not found'});
        else res.status(200).send(post);
    })
});

router.route('/api/posts').post((req, res) => {
    const post = new Post(req.body);
    post.createdAt = new Date();
    post.save()
        .then((response) =>  res.status(201).send(response))
        .catch((err) => res.status(400).send({ error: `error adding ${err}` }) );
})