import React from 'react';
import SongData from '../../data/song/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Playlist = () => {
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