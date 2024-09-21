import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://dev.to/api/articles/${id}`); // Ensure this returns a valid post
      const data = await response.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostPage;
