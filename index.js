
//import all modules needed for app to run
import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import session from 'express-session';






//configure the module to use express
const app = express();

//configuring handlebars to read files
app.engine('handlebars', engine({
    layoutsDir: './views/layouts'
}));

//to record last actions
app.use(session({
    secret: 'Total phone bill',
    resave: false,
    saveUninitialized: true
}));

//module to display messages
app.use(flash());

//modules to translate info into readable files
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.render('index')//home route to see if everything has been configured properly
});

//configure port to run the app
const PORT = process.env.PORT || 4210;
app.listen(PORT, function (req, res) {
    console.log('We are taking off on port:', PORT);
});

