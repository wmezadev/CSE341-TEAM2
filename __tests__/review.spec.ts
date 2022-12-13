import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createServer } from '../utils/testing';
import mongoose from 'mongoose';
import { Review } from '../models';

const app = createServer();
const ReviewTestPayload = {
  boardgame_id: new mongoose.Types.ObjectId().toString(),
  user_id: 'Test_user_id',
  content: 'Test Content',
  rating: 8
};

describe('review', () => {
  beforeAll(async () => {
    mongoose.set('strictQuery', false);
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('route: /review/', () => {
    describe('get: given the review route, does exist', () => {
      it('should return a 200', async () => {
        await supertest(app).get('/review').expect(200);
      });
    });

    describe('post: given a review payload, is stored', () => {
      it('should return a 201', async () => {
        const { statusCode, body } = await supertest(app).post(`/review/`).send(ReviewTestPayload);
        expect(body).toEqual({
          __v: 0,
          _id: expect.any(String),
          created: expect.any(String),
          updated: expect.any(String),
          ...ReviewTestPayload
        });
        expect(statusCode).toBe(201);
      });
    });

    describe('post: given a wrong review payload, is not stored', () => {
      it('should return a 400', async () => {
        const { statusCode } = await supertest(app).post(`/review/`).send({});
        expect(statusCode).toBe(400);
      });
    });
  });

  describe('route: /review/:review_id', () => {
    describe('put: given a review ID and a payload, is updated', () => {
      it('should return a 201', async () => {
        const review = new Review({
          ...ReviewTestPayload,
          created: new Date(),
          updated: new Date()
        });
        await review.save();
        const { statusCode, body } = await supertest(app)
          .put(`/review/${review._id}`)
          .send({
            ...ReviewTestPayload,
            content: 'Second test content'
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

    describe('delete: given a wrong review ID for delete, does not exist', () => {
      it('should return a 404', async () => {
        const id = 156846;
        await supertest(app).delete(`/review/${id}`).expect(404);
      });
    });

    describe('delete: given a review ID for delete, then is destroyed', () => {
      it('should return a 204', async () => {
        const review = new Review({
          ...ReviewTestPayload,
          created: new Date(),
          updated: new Date()
        });
        await review.save();
        const { statusCode } = await supertest(app).delete(`/review/${review._id}`);
        expect(statusCode).toBe(204);
      });
    });
  });
});
