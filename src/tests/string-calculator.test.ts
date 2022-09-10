import { StringCalculator } from "../katas/string-calculator";

describe('string-calculator', () => {

    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('Return 0 if input is empty', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('Return the same number if only one number is provided', () => {
        expect(calculator.add('9')).toBe(9);
    });

    test('Sum two number seperated by comma', () => {
        expect(calculator.add('3,2')).toBe(5);
    });

    test('Handle an unknown number of arguments', () => {
        expect(calculator.add('1,2,3')).toBe(6);
        expect(calculator.add('5,5,3')).toBe(13);
    });
    
    test('Handle newlines as separators, instead of comas', () => {
        expect(calculator.add('1\n2')).toBe(3);
        expect(calculator.add('5\n5')).toBe(10);
    });
    
    test('Handle newlines and comma togather as separators', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
        expect(calculator.add('5,6\n1')).toBe(12);
    });
    
    test('Dont allow a separator at the end', () => {
        expect(() => calculator.add('1,2,')).toThrow();
    });
    
    test('Allow the add method to handle different delimiters with one charceter', () => {
        expect(calculator.add('//;\n1;3')).toBe(4);
        expect(calculator.add('//|\n1|2|3')).toBe(6);
    });
    
    test('Allow the add method to handle different delimiters with multy charceters', () => {
        expect(calculator.add('//sep\n2sep5')).toBe(7);
    });


});