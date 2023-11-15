/*
Given a positive integer (ms), write an asynchronous function that sleeps 
for (ms) milliseconds. It can resolve any value.
*/
async function sleep(ms) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/*
let t = Date.now();
sleep(1000).then(() => {
  console.log(Date.now() - t); // 100
});
*/