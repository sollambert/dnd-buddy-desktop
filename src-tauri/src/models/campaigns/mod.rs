pub mod campaign_notes;

use diesel::prelude::*;

use crate::schema::campaigns;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = campaigns)]
pub struct Campaign {
    pub id: i32,
    pub name: String,
    pub description: String,
}

pub struct NewCampaign {
    pub name: String,
    pub description: String
}

impl From<String> for NewCampaign {
    fn from(name: String) -> Self {
        NewCampaign {name, description: String::new()}
    }
}