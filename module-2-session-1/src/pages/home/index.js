import React from 'react';
import data from '../../data/index';
import Playlist from '../../components/playlist/index';
import { Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './index.css';

function  Home() {
    const handleLogin = () => {
        window.location = "https://accounts.spotify.com/authorize?client_id=bd8f5c39bbdb4caca61e9eb3aca26dbd&response_type=code&redirect_uri=http://localhost:3000&state=generateRandomString(16)&scope=playlist-modify-private&response_type=token&show_dialog=true";
    };

    return (
        <div className="container">
            <div className="grid-container">
                <div className="item1">
                    <InputBase
                        color={'secondary'}
                        label={'Secondary field'}
                        placeholder={'Search song'}
                        margin={'normal'}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className="item2">
                    <button type="submit" onClick={handleLogin}>
                        Login
                    </button>
                </div>
                <div className="item3">
                    <Typography variant="h2" component="h2">
                        Spotify Playlist
                    </Typography>
                </div>
                <div className="item4">
                    {data.map((song) => (
                        <Playlist key={song.id} {...song} />
                    ))}
                </div>
            </div> 
        </div>         
    );
}

export default Home;