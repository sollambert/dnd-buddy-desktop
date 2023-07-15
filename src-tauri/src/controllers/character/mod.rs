use diesel::sqlite::SqliteConnection;
use std::error::Error;
use diesel::prelude::*;

use crate::models::characters::*;
use crate::schema::characters::{table, dsl};

fn new_character(conn: &mut SqliteConnection, name: String) -> Result<Character, Box<dyn Error + Send + Sync>> {
    let character = Character::from(name);
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