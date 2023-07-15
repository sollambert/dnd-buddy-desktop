-- Your SQL goes here
CREATE TABLE chatgptrequests (
    id INTEGER NOT NULL PRIMARY KEY,
    prompt TEXT NOT NULL,
    temperature REAL NOT NULL
)