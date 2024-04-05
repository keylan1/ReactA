import React, { useState } from 'react';
import Modal from 'react-modal';
import './profile.css';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      {children}
    </button>
  );
};

function Profile(props) {
  const { username, setShowProfile } = useContext(LoginContext);
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const confirmDelete = () => {
    handleModalClose();
  };

  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
      <button type="submit" onClick={() => setShowProfile(false)}>
        Go back
      </button>

      <button
        className="button-profile"
        style={{
          color: 'white',
          backgroundColor: props.theme === 'dark' ? 'green' : 'black',
        }}
        onClick={() => {
          alert('Look behind you!');
        }}>
        Secret button, beware
      </button>
      <Button
        //backgroundColor="red"
        onClick={handleModalOpen}>
        Delete Account
      </Button>
      <Modal
        //className="custom-modal"
        overlayClassName="custom-overlay"
        isOpen={modal}
        onRequestClose={handleModalClose}
        contentLabel="Delete Confirmation">
        <Button backgroundColor="red" onClick={confirmDelete}>
          Confirm
        </Button>
        <Button onClick={handleModalClose}>Cancel</Button>
      </Modal>
    </>
  );
}

export default Profile;
