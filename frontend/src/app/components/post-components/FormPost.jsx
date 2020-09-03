import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewPost } from './../../lib/store-redux/actions';

const newPost = {
    title: "",
    author: "",
    content: "",
    category: "technology"
}

const FormPost = () => {
    
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories).filter(f => f !== "All");
    const category = useSelector(state => state.category);
    const [item, setItem] = useState(newPost);
    const inputs = document.querySelectorAll(".form-control");
    
    const validate = callback => {
        inputs.forEach(input => {
            if (!input.value) input.style.border = "1px solid crimson";
            else input.style.border = "1px solid #ced4da";
        });
        callback();
    };

    const add = () => {
        window.jQuery('#form').modal("hide");
        dispatch(addNewPost(item));
    }

    const reset = () =>  setItem(newPost);
  
    const submit = e => {
        e.preventDefault();
        validate(() => {
            if(item.title === "" || item.category === "" || item.content === "") return false;
            add();
            reset();
        });
    };

    return (
        <form onSubmit={e => submit(e)}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Add a Post
                </h5>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <select 
                    required
                    defaultValue={category}
                    className="float-right mb-2"
                    onChange={e => {
                        setItem({
                            ...item,
                            category: e.target.value
                        });
                    }}
                >
                    {categories.map((c, index) => <option key={index}>{c}</option> )}
                </select>
                <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="title"
                    value={item.title}
                    onChange={e => {
                        setItem({ ...item, title: e.target.value });
                    }}
                />
                <br />
                <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="author"
                    value={item.author}
                    onChange={e => {
                        setItem({ ...item, author: e.target.value });
                    }}
                />
                <br />
                <textarea
                    required
                    className="form-control"
                    rows="5"
                    value={item.content}
                    onChange={e => {
                    setItem({ ...item, content: e.target.value });
                    }}
                />
            </div>
            <div className="modal-footer">
                <button type="button" data-dismiss="modal" className='plus'>
                    Close
                </button>
                <button type="submit" className='plus'>
                    Save
                </button>
            </div>
        </form>
    );
  };

export default FormPost;