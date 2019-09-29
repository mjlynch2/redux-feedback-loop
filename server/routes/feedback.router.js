const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route, ordered to show newest feedback first
router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback" ORDER BY "id" DESC`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in server POST:', error);
        })
})

// PUT route, sets the flagged value to true
router.put('/:id', (req, res) => {
    const query = `UPDATE "feedback" SET "flagged" = TRUE WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in server PUT:', error);
        })
})

// POST route, inserts a new feedback into the database
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

// DELETE route, removes a feedback from the database with matching id
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in server DELETE:', error);
        })
})

module.exports = router;