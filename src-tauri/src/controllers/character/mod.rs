use diesel::sqlite::SqliteConnection;
use log::{error, info};
use std::error::Error;
use diesel::prelude::*;

use crate::{establish_connection, get_db_url};
use crate::models::characters::*;
use crate::schema::characters::{table, dsl};

#[tauri::command]
pub fn new_default_character(name: String) {
    let character = NewCharacter::from(name);
    match insert_new_character(character) {
        Ok(character) => {
            info!("New character inserted: {:?}", character)
        },
        Err(err) => {
            error!("{}", err);
        }
    }
}

#[tauri::command]
pub fn new_character(name: String, race: Race, profession: Profession) {
    let character = NewCharacter::from((name, race, profession));
    match insert_new_character(character) {
        Ok(character) => {
            info!("New character inserted: {:?}", character)
        },
        Err(err) => {
            error!("{}", err);
        }
    }
}

fn insert_new_character(character: NewCharacter) -> Result<Character, Box<dyn Error + Send + Sync>>{
    let conn = &mut establish_connection(get_db_url().as_str());
    let results =
    conn.transaction::<_, diesel::result::Error, _>(|conn: &mut SqliteConnection| {
        let inserted_count = diesel::insert_into(table)
            .values(character)
            .execute(conn)?;

        Ok(table
            .order(dsl::id.desc())
            .limit(inserted_count as i64)
            .select(Character::as_select())
            .load(conn))
    }).unwrap();
    let character = (&results.unwrap()[0]).to_owned();
    Ok(character)
}

#[tauri::command]
pub fn get_character_by_id(id: i32) -> Option<Character> {
    let conn = &mut establish_connection(get_db_url().as_str());
    match dsl::characters
        .find(id)
        .select(Character::as_select())
        .first(conn)
        .optional() {
            Ok(character) => {
                character
            },
            Err(err) => {
                error!("{}", err);
                None
            }
        }
}

#[tauri::command]
pub fn get_all_characters() -> Option<Vec<Character>> {
    let conn = &mut establish_connection(&get_db_url());
    match dsl::characters
        .select(Character::as_select())
        .get_results(conn)
        .optional() {
            Ok(characters) => {
                characters
            },
            Err(err) => {
                error!("{}", err);
                None
            }
    }
}