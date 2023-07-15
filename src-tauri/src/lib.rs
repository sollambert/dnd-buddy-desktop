use diesel::sqlite::SqliteConnection;
use diesel::prelude::*;
use fast_log::Config;
use log::{info,warn,error};
use std::{error::Error, fs, path::Path};
use directories::ProjectDirs;
use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};

pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations");

pub fn init() {
    if let Some(proj_dirs) = ProjectDirs::from("com", "sollambert", "dndbuddy") {
        let app_dir = proj_dirs.config_dir();
        create_logger(app_dir);
        setup_files(app_dir);
    }
}

fn create_logger(path: &Path) {
    let mut logs_path = path.join("logs");
    create_folder(&logs_path);
    logs_path = logs_path.join("dndbuddy.log");
    match fast_log::init(Config::new()
        .file(logs_path.as_os_str().to_str().unwrap())) {
            Ok(_) => {
                info!("Logger initialized.")
            },
            Err(err) => {
                error!("Logger failed to initialize: {err}")
            }
        };
}

fn setup_files(path: &Path) {
    create_folder(path);
    let db_path = path.join("database.db");
    if !db_path.exists() {
        let conn = establish_connection(db_path.to_str().unwrap());
        match run_migrations(conn) {
            Ok(()) => {
                info!("Migrations successfully completed.")
            },
            Err(err) => {
                error!("Migrations failed: {err}");
            }
        }
    } else {
        info!("Database file found.")
    }
}

fn create_folder(path: &Path) {
    if !path.exists() {
        let dir_builder = fs::DirBuilder::new();
        match dir_builder.create(path) {
            Ok(()) => {
                info!("Folder created at {:?}", path);
            }, 
            Err(err) => {
                error!("Error encountered while creating folder: {err}");
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