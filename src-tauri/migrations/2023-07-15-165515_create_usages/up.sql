-- Your SQL goes here
CREATE TABLE usages (
    id INTEGER NOT NULL PRIMARY KEY,
    prompt_tokens INTEGER NOT NULL,
    completion_tokens INTEGER NOT NULL,
    total_tokens INTEGER NOT NULL
);