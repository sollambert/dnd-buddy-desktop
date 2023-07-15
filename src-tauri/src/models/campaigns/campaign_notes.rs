use diesel::prelude::*;

use crate::models::campaigns::Campaign;
use crate::schema::campaign_notes;

#[derive(Queryable, Selectable, Associations, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(Campaign))]
#[diesel(table_name = campaign_notes)]
pub struct CampaignNote {
    pub id: i32,
    pub campaign_id: i32,
    pub note: String
}