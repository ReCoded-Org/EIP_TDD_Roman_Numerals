import prompts from "prompts";

/* Instructions:
   Implement your own test driven code
*/

export const toRoman = (num: number) => {
  // Your code
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
