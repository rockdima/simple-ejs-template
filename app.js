import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Home page',
            msg: 'Welcome to home page',
            scripts: [
                'js/script.js'
            ],
            styles: [
                'css/style.css'
            ]
        })
});
app.get('/about', (req, res) => {
    res.render('about',
        {
            title: 'Home page',
            msg: 'Welcome to about page',
            scripts: [
                'js/script.js'
            ],
            styles: [
                'css/style.css'
            ]
        })
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));