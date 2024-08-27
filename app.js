import express from 'express';
import path from 'path';
const app = express();

import {router as generalRouter} from './routes/general.js';
import {router1 as productsRouter} from './routes/products.js';

// set the static path
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.set('view engine', 'ejs');

app.use(['/', '/about'], generalRouter);
app.use("/products", productsRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));