import strictEquals from "./strictEquals.js";

const testTable = [
    { a: 1, b: 1, result: true },
    { a: NaN, b: NaN, result: false },
    { a: 0, b: -0, result: true },
    { a: -0, b: 0, result: true },
    { a: 1, b: "1", result: false },
    { a: true, b: false, result: false },
    { a: false, b: false, result: true },
    { a: "Water", b: "oil", result: false },
    { a: undefined, b: undefined, result: true },
];

testTable.forEach((objeto) => {
    test("test1", () => {
        const result = strictEquals(objeto.a, objeto.b);
        expect(result).toBe(objeto.result);
    });
});
