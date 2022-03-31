import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

    // const params = useParams();
    const { friendId } = useParams();

    //here we load the same data of json place holder user that was loaded in Friends component. But in here we have friendId as individual path for each component. We use friedId dynamically to load user data , exactly which user data was clicked on.
    const [friend, setFriend] = useState();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
        
    }, [])
    console.log(friend?.name);
    

    return (
        <div>
            <h3>Friend's Detail</h3>
            <h5>Friend's Detail</h5>
            <h3>Friend's Detail</h3>

            <br />


            <p>Id: {friendId}</p>
            <br />
            <h3>{friend?.name}</h3>
            <h4>{friend?.website}</h4>
            <h4>{friend?.email}</h4>
        </div>
    );
};

export default FriendDetails;