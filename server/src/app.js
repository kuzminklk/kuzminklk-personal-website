

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();


const PORT = process.env.port || 3500;
const VIEWSPATH = path.resolve(import.meta.dirname, '..', '..', 'client', 'dist');

const app = express();

// Build-in middleware
app.use(express.static(path.join(VIEWSPATH)));
app.use(cors());
app.use(express.json());

// Routers
app.use(/.*/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'index.html'))
});

app.listen(5000);

export default app;