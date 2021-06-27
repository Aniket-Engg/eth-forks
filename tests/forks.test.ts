import { listOfForks, forkWithBlock } from '../src';

test('List of forks', () => {
  expect(listOfForks())
  .toStrictEqual(
      ["chainstart", "homestead", "dao", "tangerineWhistle", "spuriousDragon", "byzantium", "constantinople", "petersburg", "istanbul", "muirGlacier", "berlin"]
    );
});

test('Object: fork name as key and block number as value', () => {
    expect(forkWithBlock())
    .toStrictEqual(
        {"berlin": 12244000, "byzantium": 4370000, "chainstart": 0, "constantinople": 7280000, "dao": 1920000, "homestead": 1150000, "istanbul": 9069000, "muirGlacier": 9200000, "petersburg": 7280000, "spuriousDragon": 2675000, "tangerineWhistle": 2463000}
    );
});