import forks from './forks'

export const listOfForks = () => Object.keys(forks)

export const forkWithBlock = () => {
    const res: Record<string, number> = {}
    for (const fork in forks) {
        res[fork] = forks[fork]['block']
    }
    return res
}

export const forkDetailsbyBlockNumber = (blockNumber: number) => {
    let res: Record<string, number|string> = {}
    let forkName:string = ''
    for (const fork in forks) {
        const forkBlock = forks[fork]['block']
        if (forkBlock >= blockNumber) forkName = fork
    }
    if(forkName) res = { name: forkName, block: forks[forkName]['block'], year: forks[forkName]['year']}
    return res
}

export const forkDetailsByName = (forkName: string) => { 
    return forks[forkName] 
}

export const fullForkDetails = forks