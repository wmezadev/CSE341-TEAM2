import * as mongoDB from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Games from "../models/games";

import const collections: { games?: mongoDB.Collection<Games> } = {};

export async function connecToDB() {
    //pulls enviromental variables
    dotenv.config();

    const client = new mongoDB.MongoClient(process.env.MONGODB_URI);

    await client.connect();

    const db = client.db(process.env.DB_NAME);

    // await applySchemaValidation(db);

    const gamesCollection = db.collection<Games>(process.env.BG_COL);

    collections.games = gamesCollection;

    console.log(
        `Sucessfully connected to db: ${db.databaseName} and collection: ${gamesCollection.collectionName}`,
    );
}

// *** TO DO: add content for jsonSchema 
// update JSON schema validation so documents will always match
async function applySchemaValidation(db: mongoDB.Db) {
    const jsonSchema = {}

await db.command({

});

}