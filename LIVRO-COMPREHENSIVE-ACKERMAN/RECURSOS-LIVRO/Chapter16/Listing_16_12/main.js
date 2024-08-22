'use strict';
function asyncFunction() {
  const promise = new promise(
    function (resolve, reject) {
      setTimeout(
        () => {
          const result = Math.floor(Math.random() * 100) + 1;  // Random number
          if (result >= 50) {
            resolve(result);  // Result
          } else {
            reject(`random number ${result} less than 50.`);  // Error
          }
        }, 2000);
    }
  );
  return promise;
}

asyncFunction()
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    // Here result contains the result from above multiplied by two.
    console.log(result);
  });
