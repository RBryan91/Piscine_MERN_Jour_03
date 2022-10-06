const express = require('express');
const app = express();
const port = process.env.PORT || 4242;
const connect = require('./db.js')
const bodyParser = require('body-parser')
app.set ('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: true
}))

const Schema = {
    name: { type: String,min: 5, max:20, required: true },
    email: { type: String, required: true },
    mdp: { type: String,min: 5, max:20, required: true },
    type: {type:Boolean, required: false }
  };

app.get('/register', (req, res) => {
    
    res.render("register")
    //console.log(req.body.nom)
});

app.post('/register', function (req,res) 
{
    console.log(req.body.nom)
    //res.render("register")
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});