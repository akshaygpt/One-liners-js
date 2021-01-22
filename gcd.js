/*

  Calculate GCD / HCF of 2 integers a, b (a > b)
  
  10, 2 => 2
  9, 1 => 1

*/

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
