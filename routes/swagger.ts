import express, { Router } from 'express';
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from '../swagger.json';
export const swaggerRoutes: Router = express.Router();
swaggerRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
