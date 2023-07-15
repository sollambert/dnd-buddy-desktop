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

diesel::table! {
    chatgptrequests (id) {
        id -> Integer,
        prompt -> Text,
        temperature -> Float,
    }
}

diesel::table! {
    chatgptresponses (id) {
        id -> Integer,
        object -> Nullable<Text>,
        created -> Integer,
        model -> Nullable<Text>,
        usage_id -> Nullable<Integer>,
        gpt_id -> Nullable<Text>,
        chatgptrequest_id -> Integer,
    }
}

diesel::table! {
    encounters (id) {
        id -> Nullable<Integer>,
        notes -> Nullable<Text>,
        cr -> Integer,
        exp -> Integer,
        name -> Text,
        description -> Nullable<Text>,
        image_url -> Nullable<Text>,
        campaign_id -> Integer,
    }
}

diesel::table! {
    entities (id) {
        id -> Integer,
        name -> Text,
        description -> Nullable<Text>,
        api_url -> Nullable<Text>,
        encounter_id -> Integer,
    }
}

diesel::table! {
    items (id) {
        id -> Integer,
        name -> Text,
        description -> Nullable<Text>,
        api_url -> Nullable<Text>,
        encounter_id -> Integer,
    }
}

diesel::table! {
    messages (id) {
        id -> Integer,
        role -> Nullable<Text>,
        content -> Nullable<Text>,
    }
}

diesel::table! {
    usages (id) {
        id -> Integer,
        prompt_tokens -> Integer,
        completion_tokens -> Integer,
        total_tokens -> Integer,
    }
}

diesel::joinable!(campaign_notes -> campaigns (campaign_id));
diesel::joinable!(characters -> campaigns (campaign_id));
diesel::joinable!(chatgptresponses -> chatgptrequests (chatgptrequest_id));
diesel::joinable!(chatgptresponses -> usages (usage_id));
diesel::joinable!(entities -> encounters (encounter_id));
diesel::joinable!(items -> encounters (encounter_id));

diesel::allow_tables_to_appear_in_same_query!(
    campaign_notes,
    campaigns,
    characters,
    chatgptrequests,
    chatgptresponses,
    encounters,
    entities,
    items,
    messages,
    usages,
);
