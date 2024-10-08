import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBDfoVxjQd2Rvbg7mJZSS4ugfn2qtdW16I",
  authDomain: "singup-aa8c7.firebaseapp.com",
  databaseURL: "https://singup-aa8c7-default-rtdb.firebaseio.com",
  projectId: "singup-aa8c7",
  storageBucket: "singup-aa8c7.appspot.com",
  messagingSenderId: "103136147192",
  appId: "1:103136147192:web:f7c90dc3c11fd7f8be6d0d",
  measurementId: "G-DCWHS5WQ7T"
};

firebase.initializeApp(firebaseConfig);

const AuthComponent = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Register function
  const register = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      setError('Email or Password is invalid');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Add user to Firebase Database
      await firebase.database().ref('users/' + user.uid).set({
        full_name: fullName,
        last_login: Date.now()
      });

      alert('User Created!');
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Login function
  const login = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      setError('Email or Password is invalid');
      return;
    }

    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('User Logged In!');
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Validate Functions
  const validateEmail = (email) => /^[^@]+@\w+(\.\w+)+\w$/.test(email);
  
  const validatePassword = (password) => password.length > 6;

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={register}>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
      </form>
      <form onSubmit={login}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default AuthComponent;
