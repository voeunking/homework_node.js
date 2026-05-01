import express from 'express'
import productRoute from './routes/products.route.js';

const app = express();

app.use("/product", productRoute)

export default app;