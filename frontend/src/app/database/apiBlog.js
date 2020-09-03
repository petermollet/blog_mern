import Axios from "axios";
import { URL_BACK_END } from "../config/urlconfig";

const apiBlog = Axios.create({
    baseURL : URL_BACK_END
})



export const getAllPosts = () => {
    return apiBlog.get('/posts');
}

export const getPostById = (id) => {
    return apiBlog.get(`/posts/${id}`)
}

export const createPost = (item) => {
    return apiBlog.post('posts', item);
}



export default apiBlog;