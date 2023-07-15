use diesel::prelude::*;

use crate::schema::choices;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(ChatGPTResponse))]
#[diesel(belongs_to(Message))]
#[diesel(table_name = choices)]
pub struct Choice {
    pub id: i32,
    pub message_id: i32,
    pub finish_reason: String,
    pub index: i32,
    pub chatgptresponse_id: i32
}