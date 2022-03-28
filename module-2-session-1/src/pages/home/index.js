import React from 'react';
import SongData from '../../data/song';
import Playlist from '../../components/playlist';

const Record = () => {
    return (
        <div>
            {SongData.map((song) => (
                <Playlist key={song.id} {...song} />
            ))}          
        </div>
    );
}

export default Record;