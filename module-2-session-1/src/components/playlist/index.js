import React from 'react';
import data from '../track-info/single-sample.js';

const Playlist = () => {
    return (
        <div>
            <h1>Playlist</h1>
            <img src={data.album.images[0].url} alt=" " />
            <table>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{data.album.name}</td>
                    <td>{data.album.artists[0].name}</td>
                    <td>{data.name}</td>
                    <td><button>Play</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Playlist;