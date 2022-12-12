import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createServer } from '../utils/testing';
import mongoose from 'mongoose';
import { Boardgame } from '../models';

const app = createServer();
const boardgameTestPayload = {
  title: 'Test Title',
  slug: 'test-slug',
  number_of_players: 2,
  published_date: 2022,
  categories: ['john', 'doe'],
  rating: 8,
  designer: 'testdesigner',
  publisher: 'testpsublisher'
};

describe('boardgame', () => {
  beforeAll(async () => {
    mongoose.set('strictQuery', false);
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('route: /boardgame/', () => {
    describe('get: given the boardgame route, does exist', () => {
      it('should return a 200', async () => {
        await supertest(app).get('/boardgame').expect(200);
      });
    });

    describe('post: given a boardgame payload, is stored', () => {
      it('should return a 201', async () => {
        const { statusCode, body } = await supertest(app)
          .post(`/boardgame/`)
          .send(boardgameTestPayload);
        expect(statusCode).toBe(201);
        expect(body).toEqual({
          __v: 0,
          _id: expect.any(String),
          created: expect.any(String),
          updated: expect.any(String),
          ...boardgameTestPayload
        });
      });
    });

    describe('post: given a wrong boardgame payload, is not stored', () => {
      it('should return a 500', async () => {
        const { statusCode } = await supertest(app).post(`/boardgame/`).send({});
        expect(statusCode).toBe(500);
      });
    });
  });

  describe('route: /boardgame/:boardgame_id', () => {
    describe('get: given a wrong boardgame ID, does not exist', () => {
      it('should return a 404', async () => {
        const id = 14565;
        await supertest(app).get(`/boardgame/${id}`).expect(404);
      });
    });

    describe('get: given a boardgame ID, does exist', () => {
      it('should return a 200', async () => {
        const boardgame = new Boardgame({
          ...boardgameTestPayload,
          created: new Date(),
          updated: new Date()
        });
        await boardgame.save();
        await supertest(app).get(`/boardgame/${boardgame._id}`).expect(200);
      });
    });

    describe('put: given a boardgame ID and a payload, is updated', () => {
      it('should return a 201', async () => {
        const boardgame = new Boardgame({
          ...boardgameTestPayload,
          created: new Date(),
          updated: new Date()
        });
        await boardgame.save();
        const { statusCode, body } = await supertest(app)
          .put(`/boardgame/${boardgame._id}`)
          .send({
            ...boardgameTestPayload,
            slug: 'second-slug'
          });
        expect(statusCode).toBe(201);
        expect(body).toEqual({
          acknowledged: true,
          matchedCount: 1,
          modifiedCount: 1,
          upsertedCount: 0,
          upsertedId: null
        });
      });
    });

    describe('delete: given a wrong boardgame ID for delete, does not exist', () => {
      it('should return a 404', async () => {
        const id = 156846;
        await supertest(app).delete(`/boardgame/${id}`).expect(404);
      });
    });

    describe('delete: given a boardgame ID for delete, then is destroyed', () => {
      it('should return a 204', async () => {
        const boardgame = new Boardgame({
          ...boardgameTestPayload,
          created: new Date(),
          updated: new Date()
        });
        await boardgame.save();
        const { statusCode } = await supertest(app).delete(`/boardgame/${boardgame._id}`);
        expect(statusCode).toBe(204);
      });
    });
  });
});
