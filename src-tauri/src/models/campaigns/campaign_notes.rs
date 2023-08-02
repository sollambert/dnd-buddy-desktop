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

#[derive(Insertable)]
#[diesel(table_name = campaign_notes)]
pub struct NewCampaignNote {
    pub campaign_id: i32,
    pub note: String
}

impl From<i32> for NewCampaignNote {
    fn from(campaign_id: i32) -> Self {
        Self::from ((campaign_id, String::new()))
    }
}

impl From<(i32, String)> for NewCampaignNote {
    fn from((campaign_id, note) : (i32, String)) -> Self {
        NewCampaignNote { campaign_id, note }
    }
}