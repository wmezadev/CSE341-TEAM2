import { NextFunction, Response, Request } from 'express';
import axios from 'axios';
import { OAUTH_CLIENT_SECRET, OAUTH_CLIENT_ID, APP_AUTH_HOST } from '../config';

const redirect_uri = `${APP_AUTH_HOST}/auth/github/callback`;

async function getAccessToken(code: string | string[] | undefined) {
  const request = await axios('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      client_id: OAUTH_CLIENT_ID,
      client_secret: OAUTH_CLIENT_SECRET,
      code
    })
  });

  const text = await request.data;

  const params = new URLSearchParams(text);
  return params.get('access_token');
}

async function fetchGitHubUser(token: string | null) {
  const request = await axios('https://api.github.com/user', {
    headers: {
      Authorization: 'token ' + token
    }
  });
  return await request.data;
}

const index = async (req: Request, res: Response) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
};

const callback = async (req: Request, res: Response, next: NextFunction) => {
  const code = req.query.code;
  const access_token = await getAccessToken(code as string);
  const user = await fetchGitHubUser(access_token);
  if (user && req.session) {
    req.session.access_token = access_token;
    req.session.githubId = user.id;
    res.send('Logged in');
  } else {
    res.send('Login did not succeed!');
  }
};

const logout = (req: Request, res: Response) => {
  // @ts-ignore
  req.session = null;
  res.redirect('/');
};

export const AuthController = { index, callback, logout };
