import prompts from "prompts";

type Pair = [number, string];

const numerals: Array<Pair> = [
  [1000, "M"],
  [900, "CM"],
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
  let result = "";
  numerals.forEach((pair) => {
    const [int, char]: [number, string] = pair;
    while (num >= int) {
      result += char;
      num -= int;
    }
  });

  return result;
};

if (process.env.NODE_ENV !== "test") {
  (async () => {
    const res = await prompts({
      type: "text",
      name: "input",
      message: "Enter a number:",
      validate: (input: string) =>
        isNaN(parseInt(input, 10)) ? `Please enter numbers only` : true,
    });

    console.log(`\nin Roman Numerals, that is: ${toRoman(res.input)}\n\n`);
  })();
}
