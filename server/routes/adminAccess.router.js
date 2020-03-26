const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// only an admin is able to GET stats from the DB
// this is a count of total number of gender "other" surveyed
router.get('/other', rejectUnauthenticated, (req, res) => {
    if (req.user.admin_status === true) {
        const queryText = `SELECT count(*) FROM "survey" WHERE "gender" = 'Other'`;
        pool.query(queryText)
            .then((result) => { res.send(result.rows); })
            .catch((err) => {
                console.log('Error completing SELECT other query', err);
                res.sendStatus(500);
            });
    }
});
// only an admin is able to GET stats from the DB
// this is a count of total number of gender "female" surveyed
router.get('/female', rejectUnauthenticated, (req, res) => {
    if (req.user.admin_status === true) {
        const queryText = `SELECT count(*) FROM "survey" WHERE "gender" = 'Female'`;
        pool.query(queryText)
            .then((result) => { res.send(result.rows); })
            .catch((err) => {
                console.log('Error completing SELECT female query', err);
                res.sendStatus(500);
            });
    }
});
// only an admin is able to GET stats from the DB
// this is a count of total number of gender "male" surveyed
router.get('/male', rejectUnauthenticated, (req, res) => {
    if (req.user.admin_status === true) {
        const queryText = `SELECT count(*) FROM "survey" WHERE "gender" = 'Male'`;
        pool.query(queryText)
            .then((result) => { res.send(result.rows); })
            .catch((err) => {
                console.log('Error completing SELECT male query', err);
                res.sendStatus(500);
            });
    }
});

// only an admin is able to GET stats from the DB
// this is a count of total number of people surveyed
router.get('/total_surveyed', rejectUnauthenticated, (req, res) => {
    // console.log('req.user', req.user);
    // console.log('req.user.admin_status ', req.user.admin_status );
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

// only an admin is able to GET user list from the DB
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

// only an admin is able to DELETE users from the DB
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