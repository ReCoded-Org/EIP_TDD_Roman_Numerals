import { toRoman } from "..";

describe("Roman Numerals Converter", () => {

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

  xit("converts basic numbers to the right roman numeral", () => {
    expect(toRoman(5)).toBe("V");
    expect(toRoman(6)).toBe("VI");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(10)).toBe("X");
    expect(toRoman(20)).toBe("XX");
  });

  xdescribe("handles edge cases", () => {
    it("returns an empty string for 0", () => {
      expect(toRoman(0)).toBe("");
    });
  })

  xit("converts random cases the correct way", () => {
    type Pair = [number, string];
    const cases: Array<Pair> = [
      [3781, "MMMDCCLXXXI"],
      [3841, "MMMDCCCXLI"],
      [789, "DCCLXXXIX"],
      [999, "CMXCIX"],
      [4, "IV"],
      [6, "VI"],
      [5, "V"],
      [13, "XIII"],
      [9, "IX"],
      [245, "CCXLV"],
      [49, "XLIX"],
    ];

    for (const pair of cases) {
      const [num, expected]: [number, string] = pair;
      expect(toRoman(num)).toBe(expected);
    }
  });

  describe("handles exceptional cases", () => {
    xit("throws an error when called with arguments other than numbers", () => {
      expect(() => toRoman(NaN)).toThrowError(/.*provide a number.*/gi);
      expect(() => toRoman(null)).toThrowError(/.*provide a number.*/gi);
    });

    xit("throws an error for numbers greater than or equal to 4000", () => {
      expect(() => toRoman(4000)).toThrowError(/.*out of bounds.*/gi);
      expect(() => toRoman(4001)).toThrowError(/.*out of bounds.*/gi);
      expect(() => toRoman(5649)).toThrowError(/.*out of bounds.*/gi);
      expect(() => toRoman(23832)).toThrowError(/.*out of bounds.*/gi);
    });
  })
});
