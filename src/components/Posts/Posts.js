import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
        .then(data=> setPosts(data))
    }, [])
    
    return (
        <div>
            <h3>User Posts</h3>
            <h3>{posts.length}</h3>
            {
                posts.map(post => <Link key={post.id} to={`/posts/${post.id}`}>{ post.id }</Link>)
            }

            <Outlet></Outlet>
            {/* this outlet is the last step of showing nested routed element inside it's parent page. Here we showed <PostDetails> inside <Posts> component. The child route is the belly of the parents route. This is how nested routing is arranged */}

        </div>
    );
};

export default Posts;