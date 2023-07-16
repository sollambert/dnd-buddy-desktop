use dnd_buddy_desktop::controllers::character::get_all_characters;

fn main() {
    let characters = get_all_characters();

    match characters {
        Some(characters) => {
            for character in characters {
                println!("Character with id {} has info: {:?}", character.id, character);
            }
        },
        None => println!("No characters found")
    }
}