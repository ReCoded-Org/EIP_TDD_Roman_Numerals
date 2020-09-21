import { toRoman } from "..";

describe("The Roman Numerals Converter should", () => {
  it("converts basic numbers to the right roman numeral", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(2)).toBe("II");
    expect(toRoman(3)).toBe("III");
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(5)).toBe("V");
    expect(toRoman(6)).toBe("VI");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(10)).toBe("X");
    expect(toRoman(20)).toBe("XX");
  });
});
