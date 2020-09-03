import React from 'react';
import FormPost from './FormPost';

export const PostAction = () => (
    <div className='add'>
        <button className='plus' data-toggle="modal" data-target="#form">
            <span>+</span>
        </button>
    </div>
);

const ModalPost = () => {
    return (
        <div
            className="modal fade"
            id="form"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <FormPost />
                </div>
            </div>
        </div>
    );
};

export default ModalPost;