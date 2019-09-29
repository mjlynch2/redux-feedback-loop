const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback" ORDER BY "id" DESC`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in server POST:', error);
        })
})

router.post('/', (req, res) => {
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(query, values)
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in server POST:', error);
        })
})

module.exports = router;