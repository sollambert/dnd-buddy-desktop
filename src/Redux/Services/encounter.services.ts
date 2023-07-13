import axios from "axios";

interface encounterResponse {
    encounter: Encounter;
}

interface deleteResponse {
    payload: number;
}

interface encountersResponse {
    encounters: Array<Encounter>;
}

export async function postEncounter(
    payload: Encounter
) : Promise<encounterResponse> {
    // console.log(payload);
    return await axios.post('/api/encounter', payload)
}

export async function getEncounters() : Promise<encountersResponse> {
    return await axios.get('/api/encounter');
}

export async function deleteEncounter(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/encounter/${payload}`);
}