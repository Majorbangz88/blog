import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5100/api/posts');
                console.log(response.data)
                setPosts(response.data);
                setLoading(false);
                if (response.data == null) {
                    setError('No posts found');
                }
            } catch (err) {
                setError('Failed to fetch posts');
                setLoading(false);
            }
        };

        fetchPosts()
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post._id} className={styles.listContainer}>
                        <img src={post.imageUrl} alt={post.title} style={{ width: '100px', height: '100px',
                            marginRight: '20px' }} />
                        <div>
                            <p>
                                <strong>Author:</strong> {post.author}
                            </p>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>
                                <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
