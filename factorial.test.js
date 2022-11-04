import factorial from "./factorial.js";

const cases = [
    [0, 1],
    [1, 1],
    [5, 120],
    [10, 3_628_800],
    [true, 1],
    [false, 1],
];

describe("Given factorial function", () => {
    test.each(cases)("should first", (value, expected) => {
        const result = factorial(value);
        expect(result).toBe(expected);
    });
});

/* test("factorial de 0 es 1", () => {
    const value = 1;
    const expected = 1;
    const result = factorial(value);
    expect(result).toBe(expected);
});

test("factorial de 5 es 120", () => {
    const value = 5;
    const expected = 120;
    const result = factorial(value);
    expect(result).toBe(expected);
}); */
