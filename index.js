const express = require('express')
const app = express();
import { productsRouter } from "./routes"


app.use("api/", productsRouter)







app.get("/b", (req,res) => {
    res.send('hello world')
})

app.post('/api/auth/register', (req,res) =>{
    const firstN = req.params.firstName
    res.json({
        first_name : firstName
    })
})

"whatsapp.com/bega/messages"

app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  console.log(req.query)
  console.log(req.query.username)
  res.end();
});

// function search(req){
//     const name = req.query.username
//     console.log(name)

// }
// search()





const port = 3000
app.listen(port, () =>{
    try {
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log("error", error)
    }
    
    
})