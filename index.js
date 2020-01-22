// Code your solution here

// let even = arr.filter(n => {
//    return n % 2 === 0;
// });

let findMatching = (driversIn, stringIn) => {
   return driversIn.filter(d => d.toLowerCase() === stringIn.toLowerCase())
}

let fuzzyMatch = (driversIn, stringIn) => {
   return driversIn.filter(d => d[0] === stringIn[0])
}

let matchName = (driversIn, stringIn) => {
   return driversIn.filter(d => d.name === stringIn)
}