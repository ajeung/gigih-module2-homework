import { Typography } from '@mui/material';
import './index.css';
import { useState, useEffect } from "react";
import useAuth from "../../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../../components/trackSearch/index";
import { Form } from "react-bootstrap";


const spotifyApi = new SpotifyWebApi({
    clientId: "bd8f5c39bbdb4caca61e9eb3aca26dbd",
})

export default function Home({ code }) {
    const accessToken = useAuth(code)
    const [ search, setSearch ] = useState("")
    const [ searchResults, setSearchResults ] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        }, 
                    track.album.images[0])

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
                })
            )
        })

        return () => cancel = true
    }, [search, accessToken])

    return (
        <>
            <div className="container">
                <div className="grid-container">
                    <div className="item1">
                        <Form.Control
                            type="search"
                            placeholder="Search song"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="item2">
                        <button type="submit">
                            Logout
                        </button>
                    </div>
                    <div className="item3">
                        <Typography variant="h2" component="h2">
                            Spotify Playlist
                        </Typography>
                    </div>
                    <div className="item4">
                        {searchResults.map(track => {
                            <TrackSearchResult track={track} key={track.uri} />
                        })}
                    </div>
                </div> 
            </div>      
        </>
    )
}