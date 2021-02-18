This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This is a small app built for practicing the conversion of integers between **binary**, **decimal**, **octal**, and **hexadecimal**.

This app is a WIP.

## Features

The app first displays a page asking the user how many questions they would like to solve, the maximum range of numbers, and types of conversions to be tested on. After finishing the quiz the user has the option of continuing on to see the graded result, or returning to the index page to generate another quiz.

Implemented features:

- [x] Select the type of conversions to be tested.
- [x] Choose the number of questions per quiz.
- [x] Animated progress bar.
- [x] Show the correct answers if the user answer is wrong.
- [x] Allow user to change themes.
- [x] Quiz results page.
- [ ] Explanations on converting between bases.

Other potential features:

- Hex color practice?
- Algebraic operations on numbers (e.g. _What is Ob110010 * 0x8D_ or _What is 35 - 026?_)?
- Unusual bases? (quaternary, pentoctogesimal, etc.)

## Known Issues

- ~~Reloading the quiz page will result in an error as the question array will return a value of ```null```.~~ _fixed 2.16.21_
- ~~The quiz does not record the final question answer in the score.~~ _fixed 2.18.21_

## Tools Used

- NextJS 10.0.6
- ReactJS 17.0.1
- JavaScript 1.7
- Node 12.19.0


