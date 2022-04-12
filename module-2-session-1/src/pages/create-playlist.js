import { Component } from "react";

class CreatePlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {playlist: []};
    }

    render() {
        return (
            <div class="newSong">
                <h1>Create Playlist</h1>
                <form name="songForm">
                    <label>Title :</label><br />
                    <input type="text" id="title" /><br /><br />
                    <label>Artist :</label><br />
                    <input type="text" id="artist" /><br /><br />
                    <label>Album :</label><br />
                    <input type="text" id="album" /><br /><br />
                    <button id="btn">Add</button>
                </form>
            </div>
        )
    }
}

export default CreatePlaylist;
