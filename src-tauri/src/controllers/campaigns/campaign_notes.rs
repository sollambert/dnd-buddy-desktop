use diesel::sqlite::SqliteConnection;
use log::{error, info};
use std::error::Error;
use diesel::prelude::*;

use crate::models::campaigns::campaign_notes::{CampaignNote, NewCampaignNote};
use crate::{establish_connection, get_db_url};
use crate::models::campaigns::campaign_notes::*;
use crate::schema::*;

#[tauri::command]
pub fn new_campaign_note(id: i32, name: String) -> Option<CampaignNote> {
    let note = NewCampaignNote::from((id, name));
    match insert_new_campaign_note(note) {
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

fn insert_new_campaign_note(note: NewCampaignNote) -> Result<CampaignNote, Box<dyn Error + Send + Sync>>{    
    let conn = &mut establish_connection(get_db_url().as_str());
    let results =
    conn.transaction::<_, diesel::result::Error, _>(|conn: &mut SqliteConnection| {
        let inserted_count = diesel::insert_into(campaign_notes::table)
            .values(note)
            .execute(conn)?;

        Ok(campaign_notes::table
            .order(campaign_notes::dsl::id.desc())
            .limit(inserted_count as i64)
            .select(CampaignNote::as_select())
            .load(conn))
    }).unwrap();
    let character = (&results.unwrap()[0]).to_owned();
    Ok(character)
}