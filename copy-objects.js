/*

  Shallow copy two objects into one

  {a: 1, b: 2}, {b: 4, c: 3} => {a: 1, b: 4, c: 3}

*/

const fn = (o1, o2) => {...o1, ...o2}
