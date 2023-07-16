// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use dnd_buddy_desktop::{*, controllers::characters::*};
use tauri::Menu;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn init() {
// }

fn main() {
    init();
    let menu = Menu::new();
    tauri::Builder::default()
        .menu(menu)
        .invoke_handler(tauri::generate_handler![
            get_all_characters,
            get_character_by_id,
            new_character,
            new_default_character,
            delete_character,
            update_character])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
