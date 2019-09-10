import {validURL} from '../client/js/urlChecker'


describe('Test "validURL()" should exist' , () => {
    test('It should be defined', async () => {
        expect(validURL).toBeDefined();
    });
});

describe('Test "validURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });
});

describe('Test "validURL()" for valid url' , () => {
    var url = "https://timesofindia.indiatimes.com/india/chandrayaan-2-isro-gets-image-of-vikram-lander-communication-yet-to-be-established/articleshow/71033778.cms";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});

describe('Test "validURL()" for invalid url' , () => {
    var url = "htp:/timesofindia.indiatimes.com/india/chandrayaan-2-isro-gets-image-of-vikram-lander-communication-yet-to-be-established/articleshow/71033778.cms";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});
