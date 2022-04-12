import React from 'react';
import data from '../data/song';
import Playlist from '../components/playlist';

const Home = () => {
    return (
        <div>
            <h1>Playlist</h1>
            {data.map((song) => (
                <Playlist key={song.id} {...song} />
            ))}
        </div>          
    );
}

export default Home;