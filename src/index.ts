import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';

import { startServer } from './server';

import dotenv from 'dotenv';
dotenv.config();

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

startServer();