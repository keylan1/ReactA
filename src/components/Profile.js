import React from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

function Profile() {
  const { username, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
      <button type="submit" onClick={() => setShowProfile(false)}>
        Go back
      </button>
    </>
  );
}

export default Profile;
