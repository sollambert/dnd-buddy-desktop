use diesel::prelude::*;

use crate::schema::chatgptrequests;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = chatgptrequests)]
pub struct ChatGPTRequest {
    pub id: i32,
    pub prompt: String,
    pub temperature: f32,
}