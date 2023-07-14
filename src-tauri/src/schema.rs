// @generated automatically by Diesel CLI.

diesel::table! {
    characters (id) {
        id -> Integer,
        name -> Text,
        level -> Integer,
        strength -> Integer,
        dexterity -> Integer,
        constitution -> Integer,
        intelligence -> Integer,
        wisdom -> Integer,
        charisma -> Integer,
        race -> Integer,
        profession -> Integer,
        background -> Nullable<Text>,
        campaign_id -> Nullable<Integer>,
    }
}
