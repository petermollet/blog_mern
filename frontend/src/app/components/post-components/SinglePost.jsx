import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSinglePost } from "../../lib/store-redux/actions";

const HeaderPost = ({ category, createdAt, title, author }) => {
    const format = createdAt => {
        const date = new Date(createdAt);
        const day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <>
            <div className='mt-5 info d-flex justify-content-between'>
                <small><i>Category:</i> {category}</small>
                <small><i>Created:</i> {format(createdAt)}</small>
            </div>
            <h3 className="mt-5">
                {title}<small className="ml-3">by {author}</small>
            </h3>
            <hr />
        </>
    );
};

const SinglePost = ({ match: { params : { id }}}) => {
    const dispatch = useDispatch();
    const singlePost = useSelector(state => state.single);
    useEffect(() => {
        dispatch(fetchSinglePost(id));
    }, [dispatch, id]);

    if (!singlePost) return <>No Post</>;
    return (
        <div className="blog">
            <Link to="/">back</Link>
            <HeaderPost { ...singlePost } />
            <p>{singlePost.content}</p>
            <div style={{ border: "1px solid #eee" }}></div>
        </div>
    );
};


export default SinglePost;