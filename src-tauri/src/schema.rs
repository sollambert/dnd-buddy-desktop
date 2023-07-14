// @generated automatically by Diesel CLI.

diesel::table! {
    campaign_notes (id) {
        id -> Integer,
        campaign_id -> Integer,
        note -> Text,
    }
}

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

diesel::joinable!(campaign_notes -> campaigns (campaign_id));
diesel::joinable!(characters -> campaigns (campaign_id));

diesel::allow_tables_to_appear_in_same_query!(
    campaign_notes,
    campaigns,
    characters,
);
