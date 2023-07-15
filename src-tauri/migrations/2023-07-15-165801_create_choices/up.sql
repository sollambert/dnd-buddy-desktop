-- Your SQL goes here
CREATE TABLE choices (
    id INTEGER NOT NULL PRIMARY KEY,
    message_id INTEGER NOT NULL, 
    finish_reason TEXT,
    "index" INTEGER NOT NULL,
    chat_gpt_response_id INTEGER NOT NULL,
    FOREIGN KEY (chat_gpt_response_id) REFERENCES chat_gpt_responses(id),
    FOREIGN KEY (message_id) REFERENCES messages(id)
);