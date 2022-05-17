const express = require('express')
const path = require('path')
const expressHbs = require('express-handlebars');

const app = express();

const hbs = expressHbs.create({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    extname: 'hbs',
    defaultLayout: 'layout'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'Handlebars-StaticFiles')))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/task1', (req, res) => {
    res.render('task1')
})

app.get('/task2', (req, res) => {
    res.render('task2')
})

app.get('/task3', (req, res) => {
    res.render('task3')
})

app.get('/task4', (req, res) => {
    res.render('task4')
})

app.get('/task4-details', (req, res) => {
    res.render('task4-details')
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

