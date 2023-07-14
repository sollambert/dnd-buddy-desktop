// @generated automatically by Diesel CLI.

diesel::table! {
    campaigns (id) {
        id -> Integer,
        name -> Text,
        description -> Text,
    }
}

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

diesel::joinable!(characters -> campaigns (campaign_id));

diesel::allow_tables_to_appear_in_same_query!(
    campaigns,
    characters,
);
