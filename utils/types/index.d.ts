import { SessionData } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    session: { [key: string]: any } | null;
    access_token: { [key: string]: any } | any;
    githubId: { [key: string]: any } | any;
  }
}
