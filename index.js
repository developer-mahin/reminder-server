const express = require("express")
const app = express()
const cors = require("cors")
const port = process.send.PORT || 5000


app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    res.send("<h1>Reminder server is running</h1>")
})

app.listen(port, () => { console.log('http://localhost:' + port) })