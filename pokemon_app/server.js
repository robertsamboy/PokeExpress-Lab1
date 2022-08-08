const { application } = require('express');
const express = require('express');
require('dotenv').config();
const pokemon = require('./models/pokemon')
const app = express();
const port = process.env.PORT || 3003;



app.use(express.urlencoded({extended:false}))
// setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon',(req,res)=>{
    res.render('Index', {pokemon:pokemon})
})

app.get('/pokemon/:id', (req,res)=>{
    res.send(req.params.id)
})




app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 



