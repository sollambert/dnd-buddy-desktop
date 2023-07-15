pub mod campaign_notes;

use diesel::prelude::*;

use crate::schema::campaigns;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = campaigns)]
pub struct Campaigns {
    pub id: i32,
    pub name: String,
    pub description: String,
}