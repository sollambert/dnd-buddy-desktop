-- Your SQL goes here
CREATE TABLE choices (
    id INTEGER NOT NULL PRIMARY KEY,
    message_id INTEGER NOT NULL, 
    finish_reason TEXT,
    "index" INTEGER NOT NULL,
    chatgptresponse_id INTEGER NOT NULL,
    FOREIGN KEY (chatgptresponse_id) REFERENCES chatgptresponses(id),
    FOREIGN KEY (message_id) REFERENCES messages(id)
);