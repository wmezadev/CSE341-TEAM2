import dotenv from 'dotenv';
dotenv.config();

export const APP_PORT = process.env.APP_PORT || '8080';
export const APP_HOST = process.env.APP_HOST || 'localhost';
export const APP_HTTP_SCHEMA = process.env.APP_HTTP_SCHEMA || 'http';
export const MONGODB_URI = process.env.MONGODB_URI || '';