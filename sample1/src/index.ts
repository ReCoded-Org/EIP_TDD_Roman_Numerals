import prompts from "prompts";

/* Instructions:
   1. run `yarn watch:1` now and observe the failing tests
   2. check the failing test case, note the expected and received data
   3. Look at the code and see if there is any pattern that can help you make the code pass
*/

export const toRoman = (num: number) => {
  let result = "";

  while (num >= 10) {
    result += "X";
    num -= 10;
  }

  while (num >= 5) {
    result += "V";
    num -= 5;
  }

  while (num >= 1) {
    result += "I";
    num -= 1;
  }

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
