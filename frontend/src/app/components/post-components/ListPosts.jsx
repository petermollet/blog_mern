import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListPosts = () => {
    
    const posts = useSelector(state => state.posts);
    const truncate = text => {
        if (text.length < 99)  return;
        return `${text.substring(0, 100)} ...`;
    };

    return (
        <>
            { posts.map((post, index) => (
                <div key={index} >
                    <h3>
                        <Link
                            to={`/post/${post._id}`}
                            params={{ _id: post._id }}
                        >
                            {post.title}{" "}
                        </Link>
                    </h3>
                    <span>by {post.author}</span>
                    <p>{truncate(post.content)}</p>
                    <div style={{ border: "1px solid #eee" }}></div>
                </div>
            ))}
        </>
    );
    
};

export default ListPosts;