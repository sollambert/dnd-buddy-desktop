use diesel::prelude::*;

use crate::models::chatgpt::{chat_gpt_responses::ChatGptResponse, messages::Message};
use crate::schema::choices;

#[derive(Queryable, Selectable, Associations, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(ChatGptResponse))]
#[diesel(belongs_to(Message))]
#[diesel(table_name = choices)]
pub struct Choice {
    pub id: i32,
    pub message_id: i32,
    pub finish_reason: String,
    pub index: i32,
    pub chat_gpt_response_id: i32
}