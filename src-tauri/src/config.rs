use serde::Deserialize;
#[derive(Deserialize, Debug)]
pub struct Config {
    gpt_api_key: String
}