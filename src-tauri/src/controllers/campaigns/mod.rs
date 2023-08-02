use diesel::sqlite::SqliteConnection;
use log::{error, info};
use std::error::Error;
use diesel::prelude::*;

use crate::models::campaigns::campaign_notes::CampaignNote;
use crate::{establish_connection, get_db_url};
use crate::models::campaigns::*;
use crate::schema::*;

pub mod campaign_notes;

#[tauri::command]
pub fn new_campaign(name: String) -> Option<Campaign> {
    let campaign = NewCampaign::from(name);
    match insert_new_campaign(campaign) {
        Ok(character) => {
            info!("New character inserted: {:?}", character);
            Some(character)
        },
        Err(err) => {
            error!("{}", err);
            None
        }
    }
}

fn insert_new_campaign(campaign: NewCampaign) -> Result<Campaign, Box<dyn Error + Send + Sync>>{    
    let conn = &mut establish_connection(get_db_url().as_str());
    let results =
    conn.transaction::<_, diesel::result::Error, _>(|conn: &mut SqliteConnection| {
        let inserted_count = diesel::insert_into(campaigns::table)
            .values(campaign)
            .execute(conn)?;

        Ok(campaigns::table
            .order(campaigns::dsl::id.desc())
            .limit(inserted_count as i64)
            .select(Campaign::as_select())
            .load(conn))
    }).unwrap();
    let character = (&results.unwrap()[0]).to_owned();
    Ok(character)
}

#[tauri::command]
pub fn get_campaign_by_id(id: i32) -> Option<CampaignResult> {
    let conn = &mut establish_connection(get_db_url().as_str());

    match campaigns::table
    .find(id)
    .select(Campaign::as_select())
    .first(conn)
    .optional() {
        Ok(campaign) => {
            let campaign = campaign.unwrap();
            use crate::schema::campaign_notes;
            let notes = campaign_notes::table
                .inner_join(campaigns::table)
                .filter(campaigns::id.eq(campaign.id))
                .select(CampaignNote::as_select())
                .load::<CampaignNote>(conn)
                .optional().unwrap();
            Some(CampaignResult::from((campaign, notes)))
        },
        Err(err) => {
            error!("{}", err);
            None
        }
    }
}
