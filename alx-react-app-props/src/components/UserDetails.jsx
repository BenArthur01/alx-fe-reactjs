// src/components/UserDetails.jsx

import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails({ userData }) {
    // Accessing context data  using useContext
    const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;