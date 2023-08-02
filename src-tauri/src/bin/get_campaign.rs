use std::env::args;
use dnd_buddy_desktop::controllers::campaigns::get_campaign_by_id;

fn main() {
    let campaign_id = args()
        .nth(1)
        .expect("get_campaign requires a campaign id")
        .parse::<i32>()
        .expect("Invalid ID");

        let campaign = get_campaign_by_id(campaign_id);

        match campaign {
            Some(campaign) => {
                println!("Campaign with id {} has info: {:?}", campaign.id, campaign.name);
                match campaign.notes {
                    Some(notes) => {
                        println!("Notes:");
                        for note in notes {
                            println!("{:?}", note);
                        }
                    },
                    None => println!("No notes.")
                };
            },
            None => println!("Unable to find campaign {}", campaign_id)
        }
}