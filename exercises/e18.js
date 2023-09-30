/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let year = data.asteroids.filter(ast => ast.discoveryYear)
    .map(y => y.discoveryYear)
    .reduce((acc, curValue) => {
      acc[curValue] = (acc[curValue] || 0) + 1 ;
      return acc;
    }, {});
  let mostYear = null;
  let maxOccurrences = 0;
  for (let number in year) {
    if(year[number] > maxOccurrences) {
      mostYear = Number(number);
      maxOccurrences = year[number];
    }
  }
  return mostYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
