const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newSurvey = req.body.payload;
    const queryText = `INSERT INTO survey 
                    ("location", "date", "time", "name", "age group", "gender", "race", "ethnicity", "group")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
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
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT query', err);
            res.sendStatus(500);
        });
});

module.exports = router;