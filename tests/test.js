import request from 'supertest';

import app from '../index.js';

test('home page shows list of movies', async () => {
    const response = await request(app)
        .get('/')
        .expect(200);
    expect(response.text.includes('Godfather')).toBeTruthy();
    expect(response.text.includes('Threat Level Midnight')).toBeTruthy();
});

test('movie page shows movie details', async () => {
    const response = await request(app)
        .get('/movies/10')
        .expect(200);
    expect(response.text.includes('Threat Level Midnight')).toBeTruthy();
});