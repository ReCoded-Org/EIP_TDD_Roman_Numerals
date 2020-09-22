import { toRoman } from "..";

describe("The Roman Numerals Converter should", () => {

  it("handles basic numbers like 1", () => {
    expect(toRoman(1)).toBe("I");
  })

  it("handles basic numbers like 2", () => {
    expect(toRoman(2)).toBe("II");
  })

  it("handles basic numbers like 3", () => {
    expect(toRoman(3)).toBe("III");
  })

  xit("handles basic numbers like 4", () => {
    expect(toRoman(4)).toBe("IV");
  })

  it("converts basic numbers to the right roman numeral", () => {
    expect(toRoman(5)).toBe("V");
    expect(toRoman(6)).toBe("VI");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(10)).toBe("X");
    expect(toRoman(20)).toBe("XX");
  });

});
