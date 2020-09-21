import prompts from "prompts";

/* Instructions:
   Try and fix the failing tests
*/

type Pair = [number, string];

const numerals: Array<Pair> = [
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export const toRoman = (num: number) => {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error(`Please provide a number`);
  }

  let result = " ";
  numerals.forEach((pair) => {
    const [int, char]: [number, string] = pair;
    while (num >= int) {
      result += char;
      num -= int;
    }
  });

  return result;
};

/* ######################################### */
/*    Interactive run script (don't edit)    */
/* ######################################### */

if (process.env.NODE_ENV !== "test") {
  (async () => {
    const res = await prompts({
      type: "text",
      name: "input",
      message: "Enter a number:",
      validate: (input: string) =>
        isNaN(parseInt(input, 10)) ? `Please enter numbers only` : true,
    });

    try {
      const result = toRoman(parseInt(res.input, 10));
      console.log(`\nin Roman Numerals, that is: ${result}\n\n`);
    } catch (err) {
      console.log(err.message);
    }
  })();
}
