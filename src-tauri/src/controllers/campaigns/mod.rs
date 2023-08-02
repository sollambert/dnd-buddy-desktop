use diesel::sqlite::SqliteConnection;
use log::{error, info};
use std::error::Error;
use diesel::prelude::*;

use crate::{establish_connection, get_db_url};
use crate::models::campaigns::*;
use crate::schema::campaigns::{table, dsl};

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
        let inserted_count = diesel::insert_into(table)
            .values(campaign)
            .execute(conn)?;

        Ok(table
            .order(dsl::id.desc())
            .limit(inserted_count as i64)
            .select(Campaign::as_select())
            .load(conn))
    }).unwrap();
    let character = (&results.unwrap()[0]).to_owned();
    Ok(character)
}
