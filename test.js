// const A = [1, 2, 1, 5, 4, 7, 8, 9, 6, 5, 8, 6];

// function solution(A) {
//   // Filter out non-positive numbers (0 or negative)
//   const res = A.filter((el) => el > 0);

//   // Create a set of positive numbers
//   const positive = new Set(res);
//   let guess = 1;

//   // Increment guess until we find a missing number
//   while (positive.has(guess)) {
//     guess++;
//   }

//   return guess;
// }

// const c = [
//   { id: "id1", specialization: "JS", experience: 3 },
//   { id: "id2", specialization: "Java", experience: 2 },
//   { id: "id1", specialization: "JS", experience: 1 },
//   { id: "id1", specialization: "Java", experience: 1 },
//   { id: "id1", specialization: "JS", experience: 5 },
// ];
// const s = ["JS", "Python"];

// export const getValidCandidates = (candidates, specializations) => {
//   // write your solution here and return the new array :)
//   if (candidates.lenght === 0) return [];
//   console.log(candidates);

//   const withSpecialization = [];
//   candidates.forEach((item) => {
//     if (specializations.includes(item.specialization)) withSpecialization.push(item);
//   });
//   console.log(withSpecialization);

//   const lowExperience = withSpecialization.filter((item) => {
//     return item.experience > 2;
//   });
//   console.log(lowExperience);
//   return lowExperience.map((item) => {
//     item.status = "pending";
//     return item;
//   });
// };

function solution(X, A) {
  // frog sould jumped to anase side of river by leaves
  const B = [];

  for (let i = 0; i < A.length; i++) {
    if (!B.includes(A[i]) && A[i] <= X) B.push(A[i]);

    if (B.length === X) return i;
  }
  return -1;
}

// console.log(getValidCandidates(c, s));
function solution(letters) {
  // Implement your solution here

  const result = {};
  const arr = letters.split("");

  for (const el of arr) {
    if (result[el] == -1) continue;
    if (isCharLowercase(el)) {
      if (result[el] == 1) {
        result[el] = -1;
      } else {
        result[el] = 0;
      }
    } else {
      if (result.hasOwnProperty(el.toLowerCase())) result[el.toLowerCase()] = 1;
    }
    console.log(result);
  }
  const arrayOfPassed = Object.values(result);
  let sum = 0;
  for (const item of arrayOfPassed) {
    if (item === 1) sum += 1;
  }
  return sum;
}

function solution(N) {
  //1. n to binary
  //2. iteranain of string
  const binary = N.toString(2);
  console.log(binary);

  let counter = 0;
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") counter += 1;
    if (binary[i] === "1") {
      return (max = counter > max ? counter : max);
      counter = 0;
    }
  }
  console.log(max);
  console.log(counter);
}
console.log(solution(1041));

// function solution(A) {
//     // Implement your solution here
//     const n = A.length;
//     const arr = new Set(A);

//     for(let i = 1; i<= n; i++){
//         if(!arr.has(i)) return 0;
//     }
//     return 1;
// }
