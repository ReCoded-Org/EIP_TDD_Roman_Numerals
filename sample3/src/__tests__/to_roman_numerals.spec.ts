import { toRoman, toArabic } from "..";

describe("The Roman Numerals Converter should", () => {
  describe("Arabic to Roman numerals", () => {
    it("converts basic numbers to the right roman numeral", () => {
      expect(toRoman(1)).toBe("I");
      // Fix the test above and add more cases below
    });
  })

  describe("Roman to Arabic numerals", () => {
    it("converts roman numerals to the correct basic numbers", () => {
      expect(toArabic("I")).toBe(1);
      // Fix the test above and add more cases below
    });

  })
});
