import React from 'react';

const withItems = ({ posts, isFetching }, Component) => {
  return (
    <div className="blog">
        { !posts.length && <p className="posts">No Posts :(</p> }
        { isFetching && posts.length 
          ? <p>Loading... </p> 
          : <Component /> 
        }
    </div>
  );
};

export default withItems;