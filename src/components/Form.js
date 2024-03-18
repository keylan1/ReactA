//From PedroTech & codepen, tutorial on light mode
import React from 'react';
import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

function Form() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input
          className="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="password" type="password" placeholder="Password" />
        <button
          className="submit"
          align="center"
          onClick={() => setShowProfile(true)}>
          Sign in
        </button>
        <p className="forgot" align="center">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;

// onClick={() => setShowProfile(true)}
