CREATE TABLE characters (
	id INTEGER NOT NULL PRIMARY KEY,
	name text NOT NULL,
	level INTEGER NOT NULL,
	strength INTEGER NOT NULL,
	dexterity INTEGER NOT NULL,
	constitution INTEGER NOT NULL,
	intelligence INTEGER NOT NULL,
	wisdom INTEGER NOT NULL,
	charisma INTEGER NOT NULL,
	race INTEGER NOT NULL,
	profession INTEGER NOT NULL,
	background TEXT,
	campaign_id INTEGER NULL,
	FOREIGN KEY(campaign_id) REFERENCES campaigns(id)
);