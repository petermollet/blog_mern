import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './assets/styles/App.css';
import Home from './views/Home';
import SinglePost from './components/post-components/SinglePost';
import { fetchPosts } from "./lib/store-redux/actions";
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <div className="container">
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/:id" component={SinglePost} />
            </Router>
        </div>
    );
};

export default App;