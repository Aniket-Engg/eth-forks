import { listOfForks, forkWithBlock, forkDetailsByName, fullForkDetails } from '../src';

test('List of forks', () => {
  expect(listOfForks())
  .toStrictEqual(
      ["chainstart", "homestead", "dao", "tangerineWhistle", "spuriousDragon", "byzantium", "constantinople", "petersburg", "istanbul", "muirGlacier", "berlin", "london"]
    );
});

test('Object: fork name as key and block number as value', () => {
    expect(forkWithBlock())
    .toStrictEqual(
        {"berlin": 12244000, "byzantium": 4370000, "chainstart": 0, "constantinople": 7280000, "dao": 1920000, "homestead": 1150000, "istanbul": 9069000, "london": 12965000,"muirGlacier": 9200000, "petersburg": 7280000, "spuriousDragon": 2675000, "tangerineWhistle": 2463000}
    );
});

test('fork details by fork name', () => {
    expect(forkDetailsByName('istanbul'))
    .toStrictEqual({
        "block": 9069000,
        "year": 2019
    });
});

test('Full fork details', () => {
    expect(fullForkDetails)
    .toStrictEqual({
        "berlin": {
            "block": 12244000,
            "year": 2021,
        },
        "byzantium":  {
            "block": 4370000,
            "year": 2017,
        },
        "chainstart":  {
            "block": 0,
            "year": 2015,
        },
        "constantinople":  {
            "block": 7280000,
            "year": 2019,
        },
        "dao":  {
            "block": 1920000,
            "year": 2016,
        },
        "homestead":  {
            "block": 1150000,
            "year": 2016,
        },
        "istanbul":  {
            "block": 9069000,
            "year": 2019,
        },
        "london": {
            "block": 12965000,
            "year": 2021,
        },
        "muirGlacier":  {
            "block": 9200000,
            "year": 2020,
        },
        "petersburg":  {
            "block": 7280000,
            "year": 2019,
        },
        "spuriousDragon":  {
            "block": 2675000,
            "year": 2016,
        },
        "tangerineWhistle": {
            "block": 2463000,
            "year": 2016,
        }
    });
});