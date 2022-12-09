import express, { Router } from 'express';
import { swaggerRoutes } from './swagger';
import { boardgameRoutes } from './boardgame';

export const router: Router = express.Router();
router.use(swaggerRoutes);
router.use(boardgameRoutes);
