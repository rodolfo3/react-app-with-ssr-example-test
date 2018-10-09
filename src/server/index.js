import React from 'react';

import express from 'express';
import path from 'path';
import fs from 'fs';


import api from './api';


import App from '../App';
import { renderToString } from 'react-dom/server';


const buildPath = path.resolve('./build/');
const staticPath = path.resolve(`${buildPath}/static/`);


const app = express();


app.use(
  '/static',
  express.static(staticPath),
);

fs.readdirSync(buildPath)
  .filter(name => name.indexOf('server') === -1)
  .filter(name => name.indexOf('.') > 0)
  .forEach(name => {
    const content = fs.readFileSync(`${buildPath}/${name}`);
    app.get(`/${name}`, (req, res) => {
      res.end(content);
    });
  });


app.use(api.router);


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

