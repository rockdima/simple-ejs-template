import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        msg: 'Welcome to home page!?',
        scripts: [
            'js/script.js'
        ],
        styles: [
            'css/style.css'
        ]
    })
});

router.get('/about', (req, res) => {
    res.render('about', {
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

export { router };