
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "survey" (
  "id" SERIAL PRIMARY KEY,
  "location"  VARCHAR(120) NOT NULL,
  "date"  DATE,
  "time"  TIME,
  "name" VARCHAR(40) NOT NULL,
  "age" VARCHAR(40) NOT NULL,
  "gender" VARCHAR(40) NOT NULL,
  "race" VARCHAR(40) NOT NULL,
  "ethnicity" VARCHAR(40) NOT NULL,
  "group" VARCHAR(40) NOT NULL
);

CREATE TABLE "user_survey" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"survey_id" INT REFERENCES "survey"
);