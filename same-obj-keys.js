/*

  Find out if two objects have the exact same keys
  
  {a: 1, b: 2}, {a: 3, b: 4} => true
  {a: 1}, {b: 2} => false

*/

const fn = (o1, o2) => Object.keys(o1).every((key) => o2[key]) && Object.keys(o2).every((key) => o1[key])
