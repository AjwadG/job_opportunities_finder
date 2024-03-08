import express from "express";
import axios from "axios";
import bodyParser from "body-parser";



const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', async (req, res) => {
    try {
        const results = await axios.get('https://devitjobs.com/api/jobsLight')
        console.log(results.data[0]);
        res.render('index.ejs', { jobs: results.data})
    } catch (error) {
        console.log(error.message);
        res.render('index.ejs', { jobs: []})
    }
})

app.listen(process.env.PORT | 3000, () => {
    console.log("server started");
})