import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

    //this is how we recieve data or parameter of specific individual path .
    //alwau destructure with the dynamic part of the path or nested path ,in our case it is 'postId'. This way we can match and load tha data again in the sub routed element.We use postId to to fetch the exact data from api
    const { postId } = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
        
    },[postId])

    return (
        <div>
            <h2>Post Details</h2>
            <p>Showing results for:{postId}</p>
            <h4>{post?.title}</h4>
            <h4>{ post?.body}</h4>
        </div>
    );
};

export default PostDetails;