[![npm version](https://badge.fury.io/js/eth-forks.svg)](https://www.npmjs.com/package/eth-forks)
[![Build status](https://travis-ci.com/Aniket-Engg/eth-forks.svg?branch=main)](https://travis-ci.com/Aniket-Engg/eth-forks)
[![npm](https://img.shields.io/npm/dw/eth-forks.svg)](https://www.npmjs.com/package/eth-forks)
[![npm](https://img.shields.io/npm/dt/eth-forks.svg?label=Total%20Downloads)](https://www.npmjs.com/package/eth-forks)
![NPM](https://img.shields.io/npm/l/eth-forks.svg)
[![Package Quality](https://npm.packagequality.com/shield/eth-forks.svg)](https://packagequality.com/#?package=eth-forks)

# eth-forks

A tiny NPM package to get the details of Ethereum hardforks happened with time.

**Note: Please cross-check this information before relying on it. If anything should be updated, please raise a Pull Request**

## Install
```
npm install --save eth-forks
```

## How to use

Signature of available methods:

```
const listOfForks: () => string[];
const forkWithBlock: () => Record<string, number>;
const forkDetailsByName: (forkName: string) => Record<string, number>;
const fullForkDetails: Record<string, Record<string, number>>;
```

An example to get a list of forks will be as:

```
import { listOfForks } from 'eth-forks'

console.log(listOfForks())
// ["chainstart", "homestead", "dao", "tangerineWhistle", "spuriousDragon", "byzantium", "constantinople", "petersburg", "istanbul", "muirGlacier", "berlin", "london", "arrowGlacier", "grayGlacier"]
```

## Contribution
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Aniket-Engg/eth-forks/issues)
