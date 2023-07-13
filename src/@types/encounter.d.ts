declare type Encounter = {
    id: number;
    entities: Array<Entity>;
    items: Array<Item>;
    notes: Array<string>;
    cr: number;
    exp: number;
    name: string;
    description: string;
    imageUrl: string;
}

declare type Entity = {
    id: number;
    name: string;
    description: string;
    apiUrl: string;
}

declare type Item = {
    id: number;
    name: string;
    description: string;
    apiUrl: string;
}
