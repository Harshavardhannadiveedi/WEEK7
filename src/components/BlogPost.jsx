import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default BlogPost;
