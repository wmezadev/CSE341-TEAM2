import express, { Router } from 'express';
import { swaggerRoutes } from './swagger';
import { boardgameRoutes } from './boardgame';
import { reviewRoutes } from './review';
import { authRoutes } from './auth';

export const router: Router = express.Router();
router.use(swaggerRoutes);
router.use(boardgameRoutes);
router.use(reviewRoutes);
router.use(authRoutes);
