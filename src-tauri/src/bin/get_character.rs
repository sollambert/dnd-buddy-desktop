use std::env::args;
use dnd_buddy_desktop::controllers::characters::get_character_by_id;

fn main() {
    let character_id = args()
        .nth(1)
        .expect("get_post requires a post id")
        .parse::<i32>()
        .expect("Invalid ID");

        let character = get_character_by_id(character_id);

        match character {
            Some(character) => println!("Character with id {} has info: {:?}", character.id, character),
            None => println!("Unable to find character {}", character_id)
        }
}