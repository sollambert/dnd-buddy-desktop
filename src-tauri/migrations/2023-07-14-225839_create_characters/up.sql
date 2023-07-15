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
	race TEXT CHECK(race IN ('Dwarf', 'Elf', 'Gnome', 'HalfOrc', 'HalfElf', 'Halfling', 'Human', 'Tiefling')) NOT NULL,
	profession TEXT CHECK(profession IN ('Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard')) NOT NULL,
	background TEXT,
	campaign_id INTEGER,
	FOREIGN KEY(campaign_id) REFERENCES campaigns(id)
);