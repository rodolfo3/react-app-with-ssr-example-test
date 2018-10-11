import test from './test';


import express from 'express';
const router = express.Router();


router.get('/api/v1/me', (req, res) => res.end('An API call to /me 0202' ));
router.get('/api/v1/test', (req, res) => res.end(test()));


console.log({ router });

export default { router };
