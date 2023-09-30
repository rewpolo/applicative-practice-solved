/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...
  if(array.length === 0) {
    return undefined;
  }
  let min = cb(array[0]);
  let x;
  for(let element of array) {
    if(cb(element) < min) {
      min = cb(element);
      x = element;
    }
  } return x;
}

export function maxBy(array, cb) {
  // Your code goes here...
  if(array.length === 0) {
    return undefined;
  }
  let max = cb(array[0]);
  let y;
  for(let elem of array) {
    if(cb(elem) > max) {
      max = cb(elem)
      y = elem;
    }
  } return y;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function