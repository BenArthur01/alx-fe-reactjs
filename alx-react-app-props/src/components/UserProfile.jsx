// src/components/UserProfile.jsx

import React, { useContext } from 'react'; // Importing React and useContext
import UserContext from '../UserContext'; // Importing the context

function UserProfile() {
    // Accessing context data
    const userData = useContext(UserContext);

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{userData.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
            <p>Bio: {userData.bio}</p>
        </div>    
    );
}

export default UserProfile;