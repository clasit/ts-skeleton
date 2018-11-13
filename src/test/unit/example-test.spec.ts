describe('Example of Unit Test', () => {

    const state: number = 1;

    it('All dead cells, the next generation should remain all dead', () => {
        const actual = state * 2;
        const expected = 2;
        expect(actual).toEqual(expected);
    });
});
