import React from 'react';
import './index.css';
import { Typography } from '@mui/material';

function Playlist ({ name, artists, album }) {
    return (
        <div className="flex-container">
            <div className="grid-containerr">
                <div>
                    <img src={album.images[0].url} alt="album" />
                </div>
                <div>
                    <Typography variant="body2" component="body2">{name}</Typography>
                </div>
                <div>
                    <Typography variant="body2" component="body2">{artists[0].name}</Typography>
                </div>
                <div>
                    <Typography variant="body2" component="body2">{album.name}</Typography>
                </div>
                <div>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Playlist;