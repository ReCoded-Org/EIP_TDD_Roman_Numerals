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

## Resources

- [Wikipedia on TDD](https://en.wikipedia.org/wiki/Test-driven_development)  \
  Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass. This is opposed to software development that allows code to be added that is not proven to meet requirements. American software engineer Kent Beck, who is credited with having developed or "rediscovered" the technique, stated in 2003 that TDD encourages simple designs and inspires confidence. Test-driven development is related to the test-first programming concepts of extreme programming, begun in 1999, but more recently has created more general interest in its own right.

- [Jim Weirich - Kata and Analysis](https://www.youtube.com/watch?v=WBJ3hdcM7G8)  \
  This talk is targeted for developers who have started using Test Driven Design (TDD) and feel that they don't quite "get it" yet, and are looking for guidance in the technique. This demonstration of TDD followed by an analysis of the forces and choices involved in the feedback loop between the code and the tests encountered during the kata. By examining this interaction of tests and code, we come to a better understanding of how to use tests to actively affect the direction of our design. By reflecting on the process, we understand how to pick "what to test next".


- [Clean Code: Fundamentals, Episode 6, Part 1](https://cleancoders.com/episode/clean-code-episode-6-p1)  \
  This episode begins an epic debate between the vanguard of craftsmanship and the mirror forces of traditional development. The gauntlet is thrown when Uncle Bob describes the real reason that code rots over time, and how that rot can be prevented and even reversed by a comprehensive suite of tests created through the discipline of Test Driven Development.

- [The Three Laws of TDD](https://www.youtube.com/watch?v=AoIfc5NwRks)  \
  In this talk, Uncle Bob describes the three laws of Test Driven Development, and demonstrates the discipline using the Kotlin language.

- [Is TDD Dead?](https://martinfowler.com/articles/is-tdd-dead/)  \
  A series of conversations between Kent Beck, David Heinemeier Hansson, and Martin Fowler on the topic of Test-Driven Development (TDD) and its impact upon software design.

- [Test Driven Development: By Example by Kent Beck](https://www.amazon.com/gp/product/0321146530)  \
  Quite simply, test-driven development is meant to eliminate fear in application development. While some fear is healthy (often viewed as a conscience that tells programmers to "be careful!"), the author believes that byproducts of fear include tentative, grumpy, and uncommunicative programmers who are unable to absorb constructive criticism. When programming teams buy into TDD, they immediately see positive results. They eliminate the fear involved in their jobs, and are better equipped to tackle the difficult challenges that face them.

- Arguments for / against
  - [In favor of TDD](https://subscription.packtpub.com/book/web_development/9781788398787/1/ch01lvl1sec14/arguments-in-favor-of-tdd): What we would like to focus on here are the positives, the arguments in favor of TDD.
  - [Against TDD](https://subscription.packtpub.com/book/web_development/9781788398787/1/ch01lvl1sec13/arguments-against-tdd): There are arguments against TDD, some valid and some not.

- [Disadvantages of TDD](https://stackoverflow.com/questions/64333/disadvantages-of-test-driven-development)  \
Several downsides (and I'm not claiming there are no benefits - especially when writing the foundation of a project - it'd save a lot of time at the end).  On your first TDD project there are two big losses, time and personal freedom. In the few years that I've been practicing Test Driven Development, I'd have to say the biggest downsides are ...

- [TDD vs BDD](https://phoenixnap.com/blog/tdd-vs-bdd)  \
Test-driven development (TDD) and Behavior-driven development (BDD) are both test-first approaches to Software Development. They share common concepts and paradigms, rooted in the same philosophies. In this article, we will highlight the commonalities, differences, pros, and cons of both approaches. Ultimately, the question should not be whether to adopt TDD or BDD, but which approach is best for the task at hand. Quite often, the answer to that question will be both. As more people are involved in more significant projects, it will become self-evident that both approaches are needed at different levels and at various times throughout the project’s lifecycle. TDD will give structure and confidence to the technical team. While BDD will facilitate and emphasize communication between all involved parties and ultimately delivers a product that meets the customer’s expectations and offers the Surface Certainty required to ensure confidence in further evolving the product in the future.

- [BDD vs. TDD vs. ATDD](https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd)  \
This guidepost aims to describe different testing methods or practices like Behavioral Driven Development (BDD), Test-Driven Development (TDD), Acceptance Test-Driven Development (TDD). It will also help clarify the key differences between these techniques. By the end of this article, one is expected to understand how each method works, key differences and their particular roles in the development process. Understanding how these methods work can help developers and other individuals involved in software development figure out which strategy works best to serve their purpose. Depending on the kind of project and the results it aims to achieve, the right method (or even a mix of methods) can be deployed to meet specific requirements in most efficient ways.
