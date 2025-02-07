import { describe, expect, it } from 'vitest';
import { sum } from '../estudoTeste/sum';

describe('sum', () => {
	//beforeEach
	//afterEach
	it('should sum two numbers', () => {
		// Arrange
		const number1 = 1;
		const number2 = 3;

		// Act
		const result = sum(number1, number2);

		// Assert
		const expectedResult = number1 + number2;
		expect(result).toBe(expectedResult);
	});
});
