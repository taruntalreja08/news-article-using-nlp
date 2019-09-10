var requestPost = require('../server/handleRequest')
var validateRequest = requestPost.validateRequest;
var httpMocks = require('node-mocks-http');


describe('Test "validateRequest()" should exist' , () => {
    test('It should be defined', async () => {
        expect(validateRequest).toBeDefined();
    });
});

describe('Test "validateRequest()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });
});

describe('Test "validateRequest()" throw error if incorrect user inputs' , () => {
    test('It should throw error if user gives incorrect inputs', () => {
    const next = jest.fn();
    // Request here doesn't have the required 'text' field.
    const req = httpMocks.createRequest({ 
        body: { 
            url: "https://timesofindia.indiatimes.com/india/chandrayaan-2-isro-gets-image-of-vikram-lander-communication-yet-to-be-established/articleshow/71033778.cms"
        }
    });
    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    const json = JSON.parse(res._getData());
    expect(json.message).toBe('Invalid input');
});
})
