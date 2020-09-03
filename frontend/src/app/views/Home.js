import React from "react";
import { useSelector } from "react-redux";
import ModalPost, { PostAction } from './../components/post-components/ModalPost';
import Menu from './../components/menu/Menu';
import withItems from './../components/post-components/WithItems';
import ListPosts from './../components/post-components/ListPosts';

const Home = () => {
    const state = useSelector(state => state);
    
    return (
        <>
            <ModalPost />
            <Menu />
            {withItems(state, ListPosts)}
            <PostAction />
        </>
    );
};

export default Home;