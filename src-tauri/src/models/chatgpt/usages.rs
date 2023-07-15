use diesel::prelude::*;

use crate::schema::usages;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = usages)]
pub struct Usage {
    pub id: i32,
    pub prompt_tokens: i32,
    pub completion_tokens: i32,
    pub total_tokens: i32,
}