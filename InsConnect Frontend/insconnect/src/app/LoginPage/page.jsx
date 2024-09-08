"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Login = async () => {
    e.preventDefault();

   try {
    const response = await axios.post('http://localhost:4000/login', {
      username: username, password: password
    })
    if(response.status === 400 || username){
      window.alert("Invalid Username or Password");
      console.log("Invalid Username or Password");
    }
   }
   catch(err) {
    console.log(err);
   }
  };

  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',   background: `url('/WallP.jpg')`,
      backgroundSize: 'cover' }}>
        <div className='backdrop-blur-sm  bg-black/70' style={{ width: '400px', padding: '30px', border: '1px solid indigo', borderRadius: '12px', boxShadow: '0px 0px 10px indigo', }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '48px', fontWeight: 'bold' }}>Sign In</h1>
        <form method='POST'>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          color: 'white', 
          fontWeight: 'bold' 
        }}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '8px', 
              border: '2px solid transparent', 
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
        <label style={{ 
          display: 'block', 
          marginBottom: '20px', 
          color: 'white', 
          fontWeight: 'bold' 
        }}>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '8px', 
              border: '2px solid transparent', 
              borderColor: 'indigo', 
              marginBottom: '10px', 
              backgroundColor: 'black', 
              color: 'white', 
              outline: 'none', 
              transition: 'border-color 0.3s',
            }} 
          />
        </label>
        <button 
          onClick={Login} 
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
          Sign In
        </button>
        </form>
        <div style={{ 
          marginTop: '15px', 
          textAlign: 'center' , 
          color: 'white', 
          fontWeight: 'bold',
          display: 'flex', 
          justifyContent: 'space-between' 
        }}>
          <Link href="/LandingPage">Forgot Password</Link>
          <Link href="/Register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
