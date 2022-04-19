import 'dotenv/config';
import path from 'path';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import FormData from 'form-data';
//const mockAPIResponse = require('./mockAPI.js');

const app = express()
const port = 8081
const upload = multer()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/summarization', upload.none(), async (req, res, next) => {
    const form = new URLSearchParams();
    form.append("key", process.env.MEAN_API_KEY);
    form.append("url", req.body.url);
    form.append("sentences", 2);

    const response = await fetch("https://api.meaningcloud.com/summarization-1.0", {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .catch(err => console.log(err))

    try {
        const result = await response;
        res.status(200).send(result);
    } catch {
        res.status(500).send({ message: "Failed to process summarization data" })
    }
})

app.post('/sentiment', upload.none(), async (req, res, next) => {
    const form = new URLSearchParams();
    form.append("key", process.env.MEAN_API_KEY);
    form.append("url", req.body.url);

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
        method: "POST",
        body: form
    })
    .then((response) => response.json())
    .catch(err => console.log(err))

    try {
        const result = await response;
        res.status(200).send(result);
    } catch {
        res.status(500).send({ message: "Failed to process sentiment data" })
    }
})

app.get('/server-status', (req, res) => {
    res.status(200).send({status: 200, message: "server is online"});
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})