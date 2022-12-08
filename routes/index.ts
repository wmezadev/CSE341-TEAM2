import express, { Router } from 'express';
import { swaggerRoutes } from './swagger';
import { gamesRoutes } from './games';

export const router: Router = express.Router();
router.use(swaggerRoutes);
router.use(gamesRoutes);