function solution(A) {
  // Filter out non-positive numbers (0 or negative)
  const res = A.filter((el) => el > 0);

  // Create a set of positive numbers
  const positive = new Set(res);
  let guess = 1;

  // Increment guess until we find a missing number
  while (positive.has(guess)) {
    guess++;
  }

  return guess;
}
