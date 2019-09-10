import { handleSubmit } from '../client/js/formHandler'


describe('Test "handleSubmit()" should exist' , () => {
    test('It should be defined', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
