-- Your SQL goes here
CREATE TABLE campaign_notes (
    id INTEGER NOT NULL PRIMARY KEY,
    campaign_id INTEGER NOT NULL,
    note TEXT NOT NULL,
    FOREIGN KEY(campaign_id) REFERENCES campaigns(id)
);