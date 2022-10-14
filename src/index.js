const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

//Handlebars setting
app.set("view engine","hbs");
app.engine('hbs' ,exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));
//Landing page
app.get('/', (req,res)=>{
    res.render("main");
})