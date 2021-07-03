# eth-forks

A tiny NPM package to get the details of Ethereum forks happened with time.

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
// ["chainstart", "homestead", "dao", "tangerineWhistle", "spuriousDragon", "byzantium", "constantinople", "petersburg", "istanbul", "muirGlacier", "berlin"]
```

## Contribution
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Aniket-Engg/eth-forks/issues)
