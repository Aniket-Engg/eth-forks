import { listOfForks } from '../src';

test('List of forks', () => {
  expect(listOfForks())
  .toStrictEqual(
      ["chainstart", "homestead", "dao", "tangerineWhistle", "spuriousDragon", "byzantium", "constantinople", "petersburg", "istanbul", "muirGlacier", "berlin"]
    );
});