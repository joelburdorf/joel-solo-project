const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/last', (req, res) => {
    const queryText = 'SELECT * FROM "survey"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT user query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newSurvey = req.body.payload;
    const queryText = `INSERT INTO survey 
                    ("location", "date", "time", "name", "age group", "gender", "race", "ethnicity", "group")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`;
    const queryValues = [
        newSurvey.location,
        newSurvey.date,
        newSurvey.time,
        newSurvey.name,
        newSurvey.age,
        newSurvey.gender,
        newSurvey.race,
        newSurvey.ethnicity,
        newSurvey.group,
    ];
    pool.query(queryText, queryValues)
        .then(result => {
            res.send(result);
        })
        .catch((err) => {
            console.log('Error completing INSERT query', err);
            res.sendStatus(500);
        });
});

// In the.then you can send the response back to your saga.Instead of doing:
// .then(result => {
//     res.sendStatus(201);
// })

// you would do:
// .then(result => {
//     res.send(result);
// })

module.exports = router;