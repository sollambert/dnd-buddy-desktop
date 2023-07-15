use diesel::sqlite::SqliteConnection;
use diesel::prelude::*;
use std::{error::Error, fs};
use directories::ProjectDirs;

use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations");


pub fn init_config() {
    if let Some(proj_dirs) = ProjectDirs::from("com", "sollambert", "dndbuddy") {
        println!("{:?}", proj_dirs.config_dir());
        let app_dir = proj_dirs.config_dir();
        if !app_dir.exists() {
            let dir_builder = fs::DirBuilder::new();
            match dir_builder.create(app_dir) {
                Ok(()) => {
                    println!("Local directory created at {:?}", app_dir);
                }, 
                Err(err) => {
                    println!("Error encountered while creating local config folder: {}", err);
                }
            }
        }
        let db_url = format!("file:{}/database.db", app_dir.to_str().unwrap());
        println!("{db_url}");
        let conn = establish_connection(&db_url);
        match run_migrations(conn) {
            Ok(()) => {
                println!("Migrations successfully completed.")
            },
            Err(err) => {
                println!("{}", err);
            }
        }
    }
}

fn run_migrations(mut conn: SqliteConnection) -> Result<(), Box<dyn Error + Send + Sync + 'static>> {
    conn.run_pending_migrations(MIGRATIONS).unwrap();
    Ok(())
}

fn establish_connection(db_url: &str) -> SqliteConnection {
    SqliteConnection::establish(db_url)
        .unwrap_or_else(|_| panic!("Error connecting to db"))
}