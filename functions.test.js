const functions = require('./functions')

// beforeAll(() => console.log('I am running once before all tests'))
// afterAll(() => console.log('I am running once after all tests'))

// beforeEach(() => console.log('I am running before each test'))
// afterEach(() => console.log('I am running after each test'))

describe('Basic JEST tests', () => {
    test('Adds 2 + 2 to equal 4', () => {
        expect(functions.add(2, 2)).toBe(4)
    })

    // toEqual work with non primitive {} [], toBe work with primitive string, number, ...
    test('User to equal to object { name: Mohamed, age: 35 }', () => {
        expect(functions.checkUser()).toEqual({ name: 'Mohamed', age: 35 })
    })

    test('total load <= MAX_LOAD', () => {
        const MAX_LOAD = 1600
        const load1 = 800
        const load2 = 700
        expect(load1 + load2).toBeLessThanOrEqual(MAX_LOAD)
    })

    test('isNull function is defined', () => {
        expect(functions.isNull).toBeDefined()
    })


    test('isNull function return falsy value', () => {
        expect(functions.isNull()).toBeFalsy()
    })


    test('non falsy value', () => {
        expect(1).not.toBeFalsy()
    })


});

describe('async test using then & catch', () => {
    test('async ', () => {
        expect.assertions(1)
        return functions.getPosts().then(data => {
            // console.log(data);
            expect(data.length).toBeGreaterThan(0)
        })
    })
})


describe('async test using async & await', () => {
    test('async async', async () => {
        expect.assertions(1)
        const data = await functions.getPosts(1);
        expect(data.title).toBe('Post 1');
    })
})