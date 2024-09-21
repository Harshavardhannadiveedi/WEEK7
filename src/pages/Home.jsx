import React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://dev.to/api/articles?tag=webdev'); // Filter by "webdev" tag
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Web Development Blog</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map(post => <BlogPost key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Home;
