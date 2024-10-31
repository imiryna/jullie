const A = [1, 2, 1, 5, 4, 7, 8, 9, 6, 5, 8, 6];

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

const c = [
  { id: "id1", specialization: "JS", experience: 3 },
  { id: "id2", specialization: "Java", experience: 2 },
  { id: "id1", specialization: "JS", experience: 1 },
  { id: "id1", specialization: "Java", experience: 1 },
  { id: "id1", specialization: "JS", experience: 5 },
];
const s = ["JS", "Python"];

export const getValidCandidates = (candidates, specializations) => {
  // write your solution here and return the new array :)
  if (candidates.lenght === 0) return [];
  console.log(candidates);

  const withSpecialization = [];
  candidates.forEach((item) => {
    if (specializations.includes(item.specialization)) withSpecialization.push(item);
  });
  console.log(withSpecialization);

  const lowExperience = withSpecialization.filter((item) => {
    return item.experience > 2;
  });
  console.log(lowExperience);
  return lowExperience.map((item) => {
    item.status = "pending";
    return item;
  });
};

console.log(getValidCandidates(c, s));
