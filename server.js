import express from 'express'

const app = express()
const PORT = process.env.PORT || 4000


app.get("/", (req, res)=>{
    res.json({ data: "Retrive data from server"})
})

app.get("/api", (req, res)=>{
    res.json({ data: "Retrive data from server"})
})

app.listen(()=>{
    console.log(`server running at ${PORT}`);
})
