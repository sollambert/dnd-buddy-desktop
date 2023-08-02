use dnd_buddy_desktop::controllers::campaigns::campaign_notes::new_campaign_note;
use std::io::stdin;

fn main() {
    let mut id = String::new();
    println!("Enter campaign ID:");
    stdin().read_line(&mut id).unwrap();

    let mut name = String::new();
    println!("Enter note:");
    stdin().read_line(&mut name).unwrap();

    new_campaign_note(id.trim().parse().unwrap(), name);
}