import React from 'react';

import express from 'express';
import path from 'path';
import fs from 'fs';


import api from './api';


import App from '../App';
import { renderToString } from 'react-dom/server';


const app = express();
const staticPath = path.resolve('./build/static')


app.use(
  '/static',
  express.static(staticPath),
);


api.init(app);


app.get('/', (req, res) => {
  const out = renderToString(<App />);
  const html = String(fs.readFileSync('./build/index.html')).replace('div id="root"></div>', `div id="root">${out}</div>`);

  res.end(html);
});

const port = parseInt(process.env.PORT || 3030, 10);
app.listen(port, () => {
  console.log(`Service started at port ${port}`);
});

