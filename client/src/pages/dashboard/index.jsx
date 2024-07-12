import React, { useEffect, useState } from 'react';
import FilledButton from "../../components/buttons/filledButton";
import styles from './index.module.css';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:5100/api/posts/');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Hello {user ? user.username : 'Guest'}, welcome to your dashboard</h2>
            <div className={styles.btnDiv}>
                <FilledButton
                    text={'Post Article'}
                    padding={'20px 70px'}
                    background={'black'}
                    borderRadius={'10px'}
                    color={'white'}
                    fontFamily={'switzer'}
                    cursor={'pointer'}
                />
                <FilledButton
                    text={'Edit Article'}
                    padding={'20px 72.3px'}
                    background={'black'}
                    borderRadius={'10px'}
                    color={'white'}
                    fontFamily={'switzer'}
                    cursor={'pointer'}
                />
                <FilledButton
                    text={'Delete Article'}
                    padding={'20px 64px'}
                    background={'black'}
                    borderRadius={'10px'}
                    color={'white'}
                    fontFamily={'switzer'}
                    cursor={'pointer'}
                />
                <FilledButton
                    text={'Find Article'}
                    padding={'20px 72px'}
                    background={'black'}
                    borderRadius={'10px'}
                    color={'white'}
                    fontFamily={'switzer'}
                    cursor={'pointer'}
                />
            </div>

            {posts.length === 0 ? (
                <div>No posts yet</div>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;
