import React from 'react';
import './playlist.css';
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material';

function Playlist ({ name, artists, album }) {
    return (
        <div className="flex-container">
            <div>
                <Card>
                    <CardMedia sx={{ maxWidth: 345 }}
                        component="img"
                        alt="album"
                        height="200"
                        image={album.images[0].url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {artists[0].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {album.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Select</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Playlist;