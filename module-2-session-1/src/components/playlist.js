import React from 'react';
// import SongData from '../data/song.js';
// import { useEffect, useState } from "react";
// import { recordSlice } from '../redux/slice';
// import { useDispatch } from "react-redux";

function Playlist ({ name, artists, album }) {
    // const CLIENT_ID = "bd8f5c39bbdb4caca61e9eb3aca26dbd";
    // const REDIRECT_URI = "http://localhost:3000";
    // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    // const RESPONSE_TYPE = "token";
    // const SCOPE = "playlist-modify-private";
    
    // const dispatch = useDispatch();
    
    return (
        <div className="flex-container">
            <div className="grid-container">
                <div className="item1">
                    <img src={album.images[0].url} alt="album" />
                </div>
                <div className="item2">
                    <p>{name}</p>
                    <p>{artists[0].name}</p>
                    <p>{album.name}</p>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Playlist;