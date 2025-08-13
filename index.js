// Install dependencies first:
// npm init -y
// npm install express
//const numberToWords = require("amount-to-words");
//const chequeconvert= require("chequeconvert");
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // change if needed
    password: '',       // your DB password
    database: 'mini_market'  // your database name
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL database');
});
// Middleware to parse JSON request bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello World from Node.js API!');
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database query failed' });
        } else {
            res.send({
                responseCode:"00",
                responseMessage:"Successfull",
                data:results
            })
            //res.json(results);
        }
    });
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
