//require node Modules we have installed using NPM
const express = require('express');
const app = express();

//Middleware
app.use(express.json());//this packages the incomsing/outgoing data as JSON
app.use(express.urlencoded({
    extended: false
}));//This monitors data incoming on the URL

//Express Route - This returns the message 'Home Page' when a GET request is made to the Server on the / route
app.get('/', (req, res) =>{
    res.send('Home Page')
})

//Express Route - This returns the message 'About Page' when a GET request is made to the Server on the /about route
app.get('/about', (req, res)=>{
    res.send('About Page');
})

app.post('/submit', (req, res)=>{
    console.log(req.body.name);
    res.send('Success')
})

//Listening for requests on localhost:3000
app.listen(3000, ()=>{
    console.log('This Server is listening on Port 3000');
})