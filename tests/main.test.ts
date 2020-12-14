import main from "#/main";

describe('main', (): void => {
    test('C played 5 times.', (): void => {
        const response: string = main('C', 5);
        expect(response).toBe('Not hungry');
    });
    test('C played 9 times.', (): void => {
        const response: string = main('C', 9);
        expect(response).toBe('Hunger');
    });
    test('C played 10 times.', (): void => {
        const response: string = main('C', 10);
        expect(response).toBe('Rampages');
    });
    test('Can played 2 times.', (): void => {
        const response: string = main('Can', 2);
        expect(response).toBe('Not hungry');
    });
    test('Can played 3 times.', (): void => {
        const response: string = main('Can', 3);
        expect(response).toBe('Hunger');
    });
    test('Can played 5 times.', (): void => {
        const response: string = main('Can', 5);
        expect(response).toBe('Rampages');
    });
})
