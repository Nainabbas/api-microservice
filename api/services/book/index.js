import express from  'express';

let app = express();

app.get('/books', (req, res, next) => {
    res.send(["Book1","Book2","Book3"])
})

app.listen(3001, () => {
    console.log('Server running on 3001');
})