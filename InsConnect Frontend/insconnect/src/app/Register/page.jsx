"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import UploadButtonComponent from '../_components/uploadButton';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');



  const handleSignup = async () => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:4000/register', {
        username: username, email: email, password: password, institute: institute
      })
      if(response.status === 400 ){
        window.alert("User already exists");
        console.log("user already exists");
      }
    }
    catch (err){
      console.log(err);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',   background: `url('/WallP.jpg')`,
    backgroundSize: 'cover' }}>
      <div className='backdrop-blur-xl  bg-black/70' style={{ width: '400px', padding: '30px', border: '1px solid indigo', borderRadius: '12px', boxShadow: '0px 0px 10px indigo', }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '48px', fontWeight: 'bold' }}>Sign Up</h1>

       <form method='POST'>
        <label style={{ display: 'block', marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>
          Username 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid transparent ',
              borderColor: 'indigo',
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: 'black',
              color: 'white',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>
          Email 
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid transparent ',
              borderColor: 'indigo',
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: 'black',
              color: 'white',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid transparent',
              marginTop: '10px',
              marginBottom: '10px',
              borderColor: 'indigo',
              backgroundColor: 'black',
              color: 'white',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </label>
            <label style={{ display: 'block', marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>
              Institute 
              <input
                type="text"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Enter your Institute Name"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '2px solid transparent ',
                  borderColor: 'indigo',
                  marginTop: '10px',
                  marginBottom: '10px',
                  backgroundColor: 'black',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                }}
              />
            </label>
            <div>
            <h2>Enter your college id card</h2>
            <UploadButtonComponent institute = {institute}/>
          </div>
        <button className='accent-indigo-500'
          onClick={handleSignup}
          style={{
            backgroundColor: 'indigo',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Sign Up
        </button>
        <div style={{ marginTop: '15px', textAlign: 'center' , color: 'white', fontWeight: 'bold'}}>
          
          <Link href="/LoginPage">
            Login
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
