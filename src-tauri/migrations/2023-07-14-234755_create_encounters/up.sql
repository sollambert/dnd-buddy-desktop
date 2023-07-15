-- Your SQL goes here
CREATE TABLE encounters (
	id INTEGER PRIMARY KEY,
	notes TEXT,
	cr INTEGER NOT NULL,
	exp INTEGER NOT NULL,
	name TEXT NOT NULL,
	description TEXT,
	image_url VARCHAR,
	campaign_id INTEGER NOT NULL,
    FOREIGN KEY (campaign_id) REFERENCES campaign(id)
);