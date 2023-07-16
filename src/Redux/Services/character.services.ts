import { invoke } from "@tauri-apps/api/tauri";
import axios from "axios";

interface characterResponse {
    character: Character;
}

interface deleteResponse {
    payload: number;
}

interface charactersResponse {
    characters: Array<Character>;
}

export async function postCharacter(
    payload: Character
) : Promise<characterResponse> {
    return await invoke("new_character", payload);
}

export async function putCharacter(
    payload: Character
) : Promise<characterResponse> {
    console.log(payload);
    return await invoke("update_character", {character: payload});
}

export async function getCharacters() : Promise<charactersResponse> {
    return await invoke("get_all_characters");
    // console.log(response);
    // return response;
}

export async function getCharacter(
    payload: number
) : Promise<characterResponse> {
    return await invoke("get_character_by_id", {id: payload});
}

export async function deleteCharacter(
    payload: number
) : Promise<deleteResponse> {
    return await invoke("delete_character", {id: payload});
}