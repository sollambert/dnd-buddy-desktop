use diesel::prelude::*;

use crate::schema::messages;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = messages)]
pub struct Message {
    pub id: i32,
    pub role: String,
    pub content: String,
}