/*
Write a generator function that returns a generator
object which yields the fibonacci sequence.
*/

function* fibGenerator() {
  let seed = 0;
  let nextSeed = 1;
  while (true) {
    const out = seed
    yield out;
    seed = nextSeed;
    nextSeed = out + seed;
  }
}

const gen = fibGenerator();
for (let i = 0; i < 100; i += 1) {
  console.log(gen.next().value);
}
