const express = require('express')
const path = require('path')
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();


const hbs = expressHbs.create({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: 'hbs',
    defaultLayout: 'layout'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'Handlebars-StaticFiles')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index', {author: 'Nhom 03'})
})

const {emotions, jars, categories, products, zodiacs} = require('./data')
app.get('/task1', (req, res) => {
    res.render('task1', {emotions, author: '19120376 - Nguyen Le Bao Thi'})
})

app.get('/task2', (req, res) => {
    let salary = parseFloat(req.body.salary || 0);
    arr=[]
    for (var i = 0; i < jars.length; i++){
        arr.push(salary * jars[i].cntValue /100);
    }
    res.locals.jarsVal = arr
    res.render('task2', {jars, author: ''})
})

app.get('/task3', (req, res) => {
    let category = req.query.cat || 0;
    res.locals.categories = categories;
    res.locals.products = products;
    if (category){
        res.locals.products = products.filter(item => item.category == category)
    }
    res.render('task3', {author: ''})
})

app.get('/task4', (req, res) => {
    res.locals.zodiacs = zodiacs;
    res.render('task4', {author: ''})
})

app.get('/task4/:name', (req, res) => {
    res.locals.zodiac = zodiacs.filter(item => item.name == req.params.name)[0]
    res.render('task4-details', {author: ''})
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

