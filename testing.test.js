const capitalize = require("./capitalize")
const reverseString = require("./reverseString")
const calculator = require("./calculator")

test("expects a string to be capitalized", () =>{
    expect(capitalize("testing")).toBe("Testing")
})

test("expect a string to be returned reversed", () =>{
    expect(reverseString("testing")).toBe("gnitset")
})

describe("Calculator", () =>{
    test("Calculators return correct result for '10 + 5'", () =>{
        expect(calculator.add(10,5)).toBe(15)
    })
    test("Calculators return correct result for '10 - 5'", () =>{
        expect(calculator.subtract(10,5)).toBe(5)
    })
    test("Calculators return correct result for '10 / 5'", () =>{
        expect(calculator.divide(10,5)).toBe(2)
    })
    test("Calculators return correct result for '10 * 5'", () =>{
        expect(calculator.multiply(10,5)).toBe(50)
    })
})