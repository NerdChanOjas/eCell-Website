const express=require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const {connectDB} = require('./config/db');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/participantRoute'))

app.get("/check", (req,res) => {
    res.send("Up and Running")
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Things running on port ${PORT}`))
