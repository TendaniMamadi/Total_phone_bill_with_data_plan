import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import session from 'express-session';







const app = express();

app.engine('handlebars', engine({
    layoutsDir: './views/layouts'
}));

app.use(session({
    secret: 'Total phone bill',
    resave: false,
    saveUninitialized: true
}));

app.use(flash())
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index')
});


const PORT = process.env.PORT || 4210;
app.listen(PORT, function (req, res) {
    console.log('We are taking off on port:', PORT);
});

