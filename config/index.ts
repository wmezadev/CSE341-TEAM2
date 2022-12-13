import dotenv from 'dotenv';
dotenv.config();

export const APP_PORT = process.env.APP_PORT || '8080';
export const APP_HOST = process.env.APP_HOST || 'localhost';
export const APP_HTTP_SCHEMA = process.env.APP_HTTP_SCHEMA || 'http';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET || '';
export const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID || '';
export const COOKIE_SECRET = process.env.COOKIE_SECRET || '';
export const APP_AUTH_HOST = process.env.APP_AUTH_HOST || '';
