import forks from './forks'

export const listOfForks = () => Object.keys(forks)

export const forkWithBlock = () => {
    const res: Record<string, number> = {}
    for (const fork in forks) {
        res[fork] = forks[fork]['block']
    }
    return res
}

export const fullForkDetails = forks