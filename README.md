[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ReCoded-Org/EIP_TDD_Roman_Numerals)


# Test driven development

The repository contains 4 samples of code to solve the roman numerals in TypeScript (Supercharged Javascript). Each sample has its problems.

* Sample 0: All green!

* Sample 1: it has some basic start, a starter code with tests. *You need to complete the code to make the all tests pass*. **Don't add more tests**.

* Sample 2: This one is harder, a very complicated tests cases have been added, but a great deal of the implementation code is already there. Just try to fix it to make the tests pass.

* Sample 3: In this sample, you have a code template ready, do your own test driven implementation. Add more test cases, and then go and make them pass.

---
To run tests for a sample, just type:

```
yarn test:{SAMPLE_NUMBER}
```

for example:

```
yarn test:3
```

---
## Commands available:
* `start`: builds the source code and start the interactive program, it asks the user for an input, and prints the roman converted value.
* `build`: cleans the sample's `/build` dir and re-compiles it
* `test`: runs the test suite for sample and exits
* `watch`: runs the test suite for sample and watch for changes
* `test:all`: runs the tests for all samples and exits

*all commands, except `test:all`, should be ran with a sample identifier. e.g.:*

```
yarn start:1
```

```
yarn build:0
```

```
yarn watch:2
```