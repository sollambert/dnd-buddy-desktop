pub mod campaign_notes;

use diesel::prelude::*;

use crate::schema::campaigns;

use self::campaign_notes::CampaignNote;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = campaigns)]
pub struct Campaign {
    pub id: i32,
    pub name: String,
    pub description: String
}

pub struct CampaignResult {
    pub id: i32,
    pub name: String,
    pub description: String,
    pub notes: Option<Vec<CampaignNote>>
}

#[derive(Insertable)]
#[diesel(table_name = campaigns)]
pub struct NewCampaign {
    pub name: String,
    pub description: String
}

impl From<(Campaign, Option<Vec<CampaignNote>>)> for CampaignResult {
    fn from((campaign, notes) : (Campaign, Option<Vec<CampaignNote>>)) -> Self {
        CampaignResult {
            id: campaign.id,
            name: campaign.name,
            description: campaign.description,
            notes
        }
    }
}

impl From<String> for NewCampaign {
    fn from(name: String) -> Self {
        NewCampaign {name, description: String::new()}
    }
}