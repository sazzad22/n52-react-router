import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;


    const navigate= useNavigate()

    //the event handler function where the dynamic path is sent as parameter to the navigation function
    const showFriendDetail = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h2>Name:{name}</h2>

            <Link to={`/friends/${id}`}>Show Details</Link>

            <button onClick={showFriendDetail}>{username} id:{ id}</button>
        </div>
    );
};

export default Friend;