use dnd_buddy_desktop::*;
use directories::ProjectDirs;
use log::{error, info};

fn main() {
    if let Some(proj_dirs) = ProjectDirs::from("com", "sollambert", "dndbuddy") {
        let app_dir = proj_dirs.config_dir();
        let db_path = app_dir.join("database.db");
        let conn = &mut establish_connection(db_path.to_str().unwrap());
        match dnd_buddy_desktop::controllers::character::new_character(conn, "Test".to_string()) {
            Ok(character) => {
                println!("Success! {:?}", character)
            },
            Err(err) => {
                println!("{err}")
            }
        }
    }
}