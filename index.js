const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'Handlebars-StaticFiles'),{
    index: 'index.htm'
}))

/*app.get('/', (req, res) => {
    res.send('hello')
})*/

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

