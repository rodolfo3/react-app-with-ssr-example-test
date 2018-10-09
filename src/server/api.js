const express = require('express');
const router = express.Router();


router.get('/api/v1/me', (req, res) => res.end('An API call to /me 4449' ));
router.get('*', (req, res) => res.end('???' + req.path));


module.exports = { router };
