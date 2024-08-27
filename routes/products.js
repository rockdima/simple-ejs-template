import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
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

router.get('/:pid', (req, res) => {
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

export { router };