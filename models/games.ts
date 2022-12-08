import { ObjectId } from "mongodb";

export default interface Games {
    title: string;
    slug: string;
    number_of_players: number;
    published_date: number;
    categories: Array<string>;
    rating: number;
    designer: string;
    publisher: string;
};