use diesel::prelude::*;

use crate::models::chatgpt::{chat_gpt_requests::ChatGptRequest, usages::Usage};
use crate::schema::chatgptresponses;

#[derive(Queryable, Selectable, Associations, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(Usage))]
#[diesel(belongs_to(ChatGptRequest))]
#[diesel(table_name = chatgptresponses)]
pub struct ChatGptResponse {
    pub id: i32,
    pub object: String,
    pub created: i32,
    pub model: String,
    pub usage_id: i32,
    pub gpt_id: String,
    pub chat_gpt_request_id: i32
}