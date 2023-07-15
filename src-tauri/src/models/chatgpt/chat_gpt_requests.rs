use diesel::prelude::*;

use crate::schema::chat_gpt_requests;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = chat_gpt_requests)]
pub struct ChatGptRequest {
    pub id: i32,
    pub prompt: String,
    pub temperature: f32,
}