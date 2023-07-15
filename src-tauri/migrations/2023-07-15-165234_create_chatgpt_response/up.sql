-- Your SQL goes here
CREATE TABLE chatgptresponses (
    id INTEGER NOT NULL PRIMARY KEY,
    object TEXT,
    created INTEGER NOT NULL DEFAULT 0,
    model TEXT,
    usage_id INTEGER,
    gpt_id TEXT,
    chatgptrequest_id INTEGER NOT NULL,
    FOREIGN KEY (chatgptrequest_id) REFERENCES chatgptrequests(id),
    FOREIGN KEY (usage_id) REFERENCES usages(id)
);