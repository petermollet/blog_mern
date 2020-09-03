import { getAllPosts, getPostById, createPost } from './../../database/apiBlog';

export const actions = {
    FETCH_POSTS: "FETCH_POSTS",
    FETCH_SINGLE_POST: "FETCH_SINGLE_POST",
    FETCH_PENDING: "FETCH_POSTS_PENDING",
    FETCH_ERROR: "FETCH_POSTS_ERROR",
    ADD_POST: "ADD_POST",
    SET_FILTER: "SET_FILTER"
};
  
export const fetchPending = () => {
    return {
        type: actions.FETCH_PENDING
    };
};

export const fetchError = err => {
    return {
        type: actions.FETCH_ERROR,
        payload: { error: err }
    };
};

export const fetchPostsSuccess = data => {
    return {
        type: actions.FETCH_POSTS,
        payload: { posts: data }
    };
};

export const fetchSinglePostSuccess = data => {
    return {
        type: actions.FETCH_SINGLE_POST,
        payload: { single: data }
    };
};

export const setFilter = category => {
    return {
        type: actions.SET_FILTER,
        payload: { category: category }
    };
};



//All HTTP requests here
export function fetchPosts() {
    return async function(dispatch) {
        dispatch(fetchPending());
        try {
            const response = await getAllPosts();
            return dispatch(fetchPostsSuccess(response.data));
        } catch (err){
            return dispatch(fetchError(err))
        }
    }
}

export function fetchSinglePost(id) {
    return async function(dispatch) {
        dispatch(fetchPending());
        try {
            const response = await getPostById(id);
            return dispatch(fetchSinglePostSuccess(response.data));
        } catch (err){
            return dispatch(fetchError(err))
        }
    }
}

export function addNewPost(item) {
    return async function(dispatch) {
        try {
            await createPost(item);
            return dispatch(fetchPosts());
        } catch (err){
            return dispatch(fetchError(err))
        }
    }
}