import supertest from 'supertest';
import {BoardgameController} from '../controllers/boardgame'



describe('boardgame', () => {
    describe('get boardgame route', () => {
        describe('given the boardgame does exist', () => {
            it('should return a 200', async () =>{
                await supertest(BoardgameController.index).get('../routes/boardgame').expect(200)
            })
        })
    })

})

describe('boardgame', () => {
    describe('get boardgame route', () => {
        describe('given the boardgame ID does not exist', () => {
            it('should return a 404', async () =>{
                const id = 14565
                await supertest(BoardgameController.show).get(`../routes/boardgame/${id}`).expect(404)
            })
        })
    })

})

describe('boardgame', () => {
    describe('get boardgame route', () => {
        describe('given the boardgame is stored', () => {
            it('should return a 201', async () =>{
                const test = {
                    'title': 'test',
                    'slug': 'test',
                    'number_of_players': 2,
                    'published_date': 'test',
                    'categories': 'test',
                    'rating': 'test',
                    'designer': 'test',
                    'publisher': 'test',
                    'created': 'test',
                    'updated': 'test'
                }
                await supertest(BoardgameController.store).post(`../routes/boardgame/${test}`).expect(201)
            })
        })
    })

})

describe('boardgame', () => {
    describe('get boardgame route', () => {
        describe('given the boardgame is updated', () => {
            it('should return a 201', async () =>{
                const test = {
                    'title': 'test2',
                    'slug': 'test2',
                    'number_of_players': 3,
                    'published_date': 'test2',
                    'categories': 'test2',
                    'rating': 'test2',
                    'designer': 'test2',
                    'publisher': 'test2',
                    'created': 'test2',
                    'updated': 'test2'
                }
                await supertest(BoardgameController.update).put(`../routes/boardgame/${test}`).expect(201)
            })
        })
    })

})

describe('boardgame', () => {
    describe('get boardgame route', () => {
        describe('given the boardgame id does not exist', () => {
            it('should return a 404', async () =>{
                const id = 156846
                await supertest(BoardgameController.destroy).delete(`../routes/boardgame/${id}`).expect(404)
            })
        })
    })

})