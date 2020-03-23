const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/last/:id', (req, res) => {
    let surveyId = req.params.id
    const queryText = `SELECT * FROM "survey" WHERE "id" = '${surveyId}';`;
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
                    ("location", "date", "time", "name", "age", "gender", "race", "ethnicity", "group")
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

router.put('/new_name/:id', (req, res) => {
    console.log('IN PUT WITH: req.body', req.body);
    console.log('in PUT: req.params', req.params);
    //create SQL query to UPDATE title/description for id
    let id = req.params.id;
    let newName = req.body.name;
    const queryText = `UPDATE survey SET "name" = '${newName}' WHERE id='${id}';`;
    pool.query(queryText)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log("Error changing surveyName", err);
            res.sendStatus(500);
        });
})



module.exports = router;