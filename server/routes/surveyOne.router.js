const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// any user can GET their last survey they submited
// the id is from the RETURNING id from the POST below
router.get('/last/:id', rejectUnauthenticated,(req, res) => {
    let surveyId = req.params.id
    const queryText = `SELECT * FROM "survey" WHERE "id" = '${surveyId}';`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT user query', err);
            res.sendStatus(500);
        });
});

// this POST is to create or enter a new survey into the DB
router.post('/', rejectUnauthenticated, (req, res) => {
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

// this PUT is so user can update the name of the person in their last survey they submmited
// the id is from the RETURNING id from the POST above
router.put('/new_name/:id', rejectUnauthenticated, (req, res) => {
    // console.log('IN PUT WITH: req.body', req.body);
    // console.log('in PUT: req.params', req.params);
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