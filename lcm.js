/*

  Calculate LCM of 2 integers a, b (a > b)
  
  10, 2 => 20
  3, 1 => 3

*/

const lcm = (a, b) => (a * b) / gcd(a, b);
