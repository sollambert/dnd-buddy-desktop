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
	race TEXT CHECK(race IN ('dwarf', 'elf', 'gnome', 'half_orc', 'half_elf', 'halfling', 'human', 'tiefling')) NOT NULL,
	profession TEXT CHECK(profession IN ('barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorceror', 'warlock', 'wizard')) NOT NULL,
	background TEXT,
	campaign_id INTEGER,
	FOREIGN KEY(campaign_id) REFERENCES campaigns(id)
);