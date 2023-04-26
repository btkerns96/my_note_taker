// Establishing port as localhost
const PORT = process.env.PORT || 3001;

import fs from 'fs';
import path from 'path';
import express from 'express';
import allNotes from './db/db.json';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

