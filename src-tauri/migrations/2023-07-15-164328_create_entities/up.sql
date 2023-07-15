-- Your SQL goes here
CREATE TABLE entities (
	id INTEGER NOT NULL PRIMARY KEY,
	name VARCHAR NOT NULL,
	description TEXT,
	api_url TEXT,
    encounter_id INTEGER NOT NULL,
	FOREIGN KEY (encounter_id) REFERENCES encounters(id)
);