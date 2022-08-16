import express from "express";
import mongoose from "mongoose";

import data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = 8000;


// middlewares
app.use(express.json())

// DB config
const connection_url = 'mongodb+srv://admin:8zXAHvbaW51ckpss@cluster0.yei5ij6.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});

// api endpoints
app.get('/', (req,res) => {
    res.status(200).send('Hello World')
})

app.get('/v1/posts', (req,res) => {
    res.status(200).send(data)
})

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listening
app.listen(port, ()=> {
    console.log(`listening on locahost: ${port}`)
})