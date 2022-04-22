import React from 'react';
import { Typography } from '@mui/material';
import './index.css';

const handleLogin = () => {
    window.location = "https://accounts.spotify.com/authorize?client_id=bd8f5c39bbdb4caca61e9eb3aca26dbd&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-modify-private";
};

export default function Login() {
    return(
        <div className='container'>
            <Typography variant="h2" component="h2">Welcome to Spotify</Typography>
            <button className='login' onClick={handleLogin}>Login</button>
        </div>
    )
}