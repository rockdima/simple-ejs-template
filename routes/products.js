import express from 'express';
const router1 = express.Router();

router1.get("/", (req, res) => {
    res.render('products/list', {
        title: 'Products list',
        msg: 'Products list',
        scripts: [
            'js/script.js'
        ],
        styles: [
            'css/style.css'
        ]
    })
});

router1.get('/:pid', (req, res) => {
    res.render('products/product', {
        title: 'Product',
        msg: 'Product #' + req.params.pid,
        scripts: [
            'js/script.js'
        ],
        styles: [
            'css/style.css'
        ]
    })
});

export { router1 };