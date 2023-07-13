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
    return await axios.post('/api/character', payload)
}

export async function putCharacter(
    payload: Character
) : Promise<characterResponse> {
    return await axios.put('/api/character', payload)
}

export async function getCharacters() : Promise<charactersResponse> {
    return await axios.get('/api/character');
}

export async function getCharacter(
    payload: number
) : Promise<characterResponse> {
    return await axios.get(`/api/character/${payload}`);
}

export async function deleteCharacter(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/character/${payload}`);
}