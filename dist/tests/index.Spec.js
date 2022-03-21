import app from '../server.js';
import supertest from 'supertest';
const request = supertest(app);
describe('tests the endpoints', () => {
    it('tests the home endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200 || 304);
    });
    it('tests the main function for the service endpoint', async () => {
        const response = await request.get('/api/fjord/500/250');
        expect(response.status).toBe(200 || 304);
    });
    it('tests the error view if a filename was not found', async () => {
        const response = await request.get('/api/whatever/300/500');
        expect(response.status).toBe(200 || 304);
        expect(response).toThrowError;
    });
});
