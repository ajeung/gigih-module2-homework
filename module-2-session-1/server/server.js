const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "bd8f5c39bbdb4caca61e9eb3aca26dbd",
        clientSecret: "4eac24f5feae4f819c14639d66e75e79",
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})


app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "bd8f5c39bbdb4caca61e9eb3aca26dbd",
        clientSecret: "4eac24f5feae4f819c14639d66e75e79",
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(() => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.listen(3001);