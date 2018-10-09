const express = require('express');
const router = express.Router();


router.get('/api/v1/me', (req, res) => res.end('An API call to /me 4449' ));


module.exports = { router };
