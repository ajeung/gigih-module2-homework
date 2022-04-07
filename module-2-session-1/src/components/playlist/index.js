import React from 'react';
import SongData from '../../data/song/index.js';
import { useEffect, useState } from "react";
import { recordSlice } from '../../redux/slice';
import { useDispatch } from "react-redux";

const Playlist = () => {
    const CLIENT_ID = "bd8f5c39bbdb4caca61e9eb3aca26dbd";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-modify-private";
    
    const dispatch = useDispatch();
    
    return (
        <>
            <p>Album: {SongData.album.name}</p>
            <p>Artist: {SongData.album.artists[0].name}</p>
            <p>Song: {SongData.name}</p>
            <button>Play</button>
        </>
    )
}

export default Playlist;