const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('req.body.payload.race', req.body.payload.race);
    console.log('req.body.payload.ethnicity', req.body.payload.ethnicity);
    console.log('req.body.payload.group', req.body.payload.group);
    const newSurvey = req.body.payload;
    const queryText = `INSERT INTO survey ("race", "ethnicity", "group")
                    VALUES ($1, $2, $3)`;
    const queryValues = [
        newSurvey.race,
        newSurvey.ethnicity,
        newSurvey.group,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT query', err);
            res.sendStatus(500);
        });
});

module.exports = router;