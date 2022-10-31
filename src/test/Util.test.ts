import { Utils } from "../app/Utils";

describe('Utils test suite', () => {

    /* istanbul ignore next */
    test('first test', () => {
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC');
    });

    test('parse simple URL', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({});
    });

    test('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&pass=pass');
        const expectedQuery = {
            user: 'user',
            pass: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
    });

    test('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&pass=pass');
        const expectedQuery = {
            user: 'user',
            pass: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
    });

    test('test invalid URL', () => {
        expect(() => {
            Utils.parseUrl('')
        }).toThrowError();

        expect(() => {
            Utils.parseUrl('')
        }).toThrow('Missing url');
    });

    // same test but with try catch
    test('test invalid URL with try catch', () => {
        try {
            Utils.parseUrl('')
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Missing url')
        }
    });

});

