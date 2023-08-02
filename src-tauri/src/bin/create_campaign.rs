use dnd_buddy_desktop::controllers::campaigns::new_campaign;
use std::io::stdin;

fn main() {
    let mut name = String::new();
    println!("Enter name:");
    stdin().read_line(&mut name).unwrap();
    
    new_campaign(name);
}