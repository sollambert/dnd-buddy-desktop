use diesel::sqlite::SqliteConnection;
use diesel::prelude::*;
use std::{error::Error, fs, path::Path, ffi::OsStr};
use directories::ProjectDirs;

use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations");


pub fn init() {
    if let Some(proj_dirs) = ProjectDirs::from("com", "sollambert", "dndbuddy") {
        let app_dir = proj_dirs.config_dir();
        create_folder(app_dir);
        let db_path = Path::new(app_dir.as_os_str()).join("database.db");
        if !db_path.exists() {
            let db_url = format!("file:{}", db_path.to_str().unwrap());
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
}

fn create_folder(path: &Path) {
    if !path.exists() {
        let dir_builder = fs::DirBuilder::new();
        match dir_builder.create(path) {
            Ok(()) => {
                println!("Folder created at {:?}", path);
            }, 
            Err(err) => {
                println!("Error encountered while creating folder: {}", err);
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