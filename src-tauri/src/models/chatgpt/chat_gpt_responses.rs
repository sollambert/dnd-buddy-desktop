use diesel::prelude::*;

use crate::schema::chatgptresponses;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = chatgptresponses)]
pub struct ChatGPTRequests {
    pub id: i32,
    pub object: String,
    pub created: i32,
    pub model: String,
    pub usage_id: i32,
    pub gpt_id: String,
    pub chatgptrequest_id: i32
}