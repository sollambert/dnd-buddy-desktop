-- Your SQL goes here
CREATE TABLE chat_gpt_requests (
    id INTEGER NOT NULL PRIMARY KEY,
    prompt TEXT NOT NULL,
    temperature REAL NOT NULL
)