const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/total_surveyed', rejectUnauthenticated, (req, res) => {
    console.log('req.user', req.user);
    console.log('req.user.admin_status ', req.user.admin_status );
    if (req.user.admin_status === true){
    const queryText = 'SELECT count(*) FROM "survey"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT user query', err);
            res.sendStatus(500);
        });
    }
});

router.get('/users', rejectUnauthenticated, (req, res) => {
    if (req.user.admin_status === true) {
    const queryText = 'SELECT "id", "username" FROM "user"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT user query', err);
            res.sendStatus(500);
        });
    }
});

router.delete('/deleteUser/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.admin_status === true) {
     const queryText = 'DELETE FROM "user" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing delete user query', err);
            res.sendStatus(500);
        });
    }
});

module.exports = router;