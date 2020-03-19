const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/users', (req, res) => {
    const queryText = 'SELECT "id", "username" FROM "user"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT user query', err);
            res.sendStatus(500);
        });
});

module.exports = router;