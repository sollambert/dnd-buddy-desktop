-- Your SQL goes here
CREATE TABLE chat_gpt_responses (
    id INTEGER NOT NULL PRIMARY KEY,
    object TEXT,
    created INTEGER NOT NULL DEFAULT 0,
    model TEXT,
    usage_id INTEGER,
    gpt_id TEXT,
    chat_gpt_request_id INTEGER NOT NULL,
    FOREIGN KEY (chat_gpt_request_id) REFERENCES chat_gpt_requests(id),
    FOREIGN KEY (usage_id) REFERENCES usages(id)
);