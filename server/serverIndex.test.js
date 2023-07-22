const request = require('supertest');
const app = require('./api');

jest.mock('axios');

describe('API Server', () => {
  it('shouldHandleGETRequestSuccessfully', async () => {
    const mockedResponse = {
      status: 200,
      data: { message: 'GET request successful' },
    };

    require('axios').request.mockResolvedValue(mockedResponse);

    const response = await request(app).get('/api');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'GET request successful' });
  });

  it('shouldHandlePOSTRequestSuccessfully', async () => {
    const mockedResponse = {
      status: 201,
      data: { message: 'POST request successful' },
    };

    require('axios').request.mockResolvedValue(mockedResponse);

    const response = await request(app)
      .post('/api')
      .send({ key: 'value' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'POST request successful' });
  });

  it('shouldHandleErrorResponseFromAxios', async () => {
    const mockedError = {
      response: {
        status: 404,
        data: { error: 'Not found' },
      },
    };

    require('axios').request.mockRejectedValue(mockedError);

    const response = await request(app).get('/api');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      statusText: undefined,
      error: { error: 'Not found' },
    });
  });
});
