import express, { Router } from 'express';
import { AuthController } from '../controllers';

export const authRoutes: Router = express.Router();

authRoutes.get('/auth/github', AuthController.index);
authRoutes.get('/auth/github/callback', AuthController.callback);
authRoutes.get('/auth/logout', AuthController.logout);
