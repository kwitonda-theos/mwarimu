const express = require('express')
const app = express();

app.get("/b", (req,res) => {
    res.send('hello world')
})

app.post('/api/auth/register', (req,res) =>{
    const firstN = req.params.firstName
    res.json({
        first_name : firstName
    })
})




const port = 3000
app.listen(port, () =>{
    try {
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log("error", error)
    }
    
    
})