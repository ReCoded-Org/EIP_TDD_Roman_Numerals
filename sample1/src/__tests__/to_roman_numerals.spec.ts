import { toRoman } from "..";

describe("The Roman Numerals Converter should", () => {
  it("converts basic numbers to the right numeral", () => {
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

  it("converts random cases the correct way", () => {
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
});
