use dnd_buddy_desktop::{*, controllers::character::new_character};
use directories::ProjectDirs;
use std::{io::stdin,str::FromStr};
use models::characters::{Race, Profession};

fn main() {
    if let Some(proj_dirs) = ProjectDirs::from("com", "sollambert", "dndbuddy") {
        let app_dir = proj_dirs.config_dir();
        let db_path = app_dir.join("database.db");
        let conn = &mut establish_connection(db_path.to_str().unwrap());

        let mut name = String::new();
        println!("Enter name:");
        stdin().read_line(&mut name).unwrap();

        let mut race_str = String::new();
        println!("Enter race:");
        stdin().read_line(&mut race_str).unwrap();
        let race_str = race_str.trim_end();

        let mut profession_str = String::new();
        println!("Enter profession:");
        stdin().read_line(&mut profession_str).unwrap();
        let profession_str = profession_str.trim_end();

        let race = Race::from_str(&race_str).unwrap();
        let profession = Profession::from_str(&profession_str).unwrap();
        new_character(name, race, profession);
    }
}