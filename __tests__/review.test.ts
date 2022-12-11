import supertest from 'supertest';
import {ReviewController} from '../controllers/review'

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review does exist', () => {
            it('should return a 200', async () =>{
                await supertest(ReviewController.index).get('../routes/review').expect(200)
            })
        })
    })

})

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review is stored', () => {
            it('should return a 201', async () =>{
                const test = {
                    'boardgame_id':123,
                    'user_id':123,
                    'rating':'test',
                    'content':'test',
                    'created': 'test',
                    'updated': 'test'
                }
                await supertest(ReviewController.store).post(`../routes/review/${test}`).expect(201)
            })
        })
    })

})

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review is updated', () => {
            it('should return a 201', async () =>{
                const test = {
                    'boardgame_id':12345,
                    'user_id':12345,
                    'rating':'test2',
                    'content':'test2',
                    'created': 'test2',
                    'updated': 'test2'
                }
                await supertest(ReviewController.update).put(`../routes/review/${test}`).expect(201)
            })
        })
    })

})

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review does not exist', () => {
            it('should return a 404', async () =>{
                const test = 1234
                await supertest(ReviewController.destroy).delete(`../routes/review/${test}`).expect(404)
            })
        })
    })

})

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review by Board Game does not exist', () => {
            it('should return a 404', async () =>{
                const test = 1234
                await supertest(ReviewController.getByBoardgame).get(`../routes/review/${test}`).expect(404)
            })
        })
    })

})

describe('Review', () => {
    describe('get review route', () => {
        describe('given the review by user does not exist', () => {
            it('should return a 404', async () =>{
                const test = 1234
                await supertest(ReviewController.getByUser).get(`../routes/review/${test}`).expect(404)
            })
        })
    })

})