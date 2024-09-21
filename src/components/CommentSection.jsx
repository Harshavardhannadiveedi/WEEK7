import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]); // Simple local storage of comments
      setComment('');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
