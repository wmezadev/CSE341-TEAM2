import express, { Router } from 'express';
import { swaggerRoutes } from './swagger';

export const router: Router = express.Router();
router.use(swaggerRoutes);
