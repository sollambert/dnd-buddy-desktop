use diesel::prelude::*;

use crate::schema::campaign_notes;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = campaign_notes)]
pub struct CampaignNotes {
    pub id: i32,
    pub campaign_id: i32,
    pub note: String
}