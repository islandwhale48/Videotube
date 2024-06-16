import dotenv from 'dotenv';
import connectdb from './db/index.js';
import app from './app.js';
dotenv.config({ path: '../env' });

app.on('error', (err) => {
    console.log("express doesn't work, you gotta look into it!")
})
connectdb()
    .then(() => {
        app.listen(process.env.PORT || 4000, (req, res) => {
            console.log("oh boy! Here we go....")
            console.log("Connection Successful at", process.env.PORT)

        })
    })
    .catch((error) => {

        console.log("connection failed")
    })

