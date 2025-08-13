// Install dependencies first:
// npm init -y
// npm install express
//const numberToWords = require("amount-to-words");
//const chequeconvert= require("chequeconvert");
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello World from Node.js API!');
});

app.post("/converter",(req,res)=>{
    const amount=req.body.amount;
    let words=amount*3;
    res.send({
        responseCode:"00",
        responseMessage:"Successfull",
        amountInWords:words
    })
})
// Example API route
app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is your sample API response',
        status: 'success',
        data: {
            name: 'LilMissDessy',
            role: 'Computer Scientist',
            vibe: '✨'
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
