import { Response, Request, NextFunction } from 'express';

export const githubOAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.githubId) {
    res.send(
      'You are not authenticated, Please login <a href="/auth/github">Login with Github</a>'
    );
  } else {
    next();
  }
};
