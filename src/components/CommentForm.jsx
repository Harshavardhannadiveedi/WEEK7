import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { id: Date.now(), body: comment }; // Simulate API response
    addComment(newComment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
