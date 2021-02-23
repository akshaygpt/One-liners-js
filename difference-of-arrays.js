/*

  Find difference of 2 arrays a1, a2
  (Values present in a1 but not a2)

  [1, 2], [2, 3] => [1]
  [2], [1, 2] => []
  
*/

const fn = (a1, a2) => a1.filter(val => !new Set(a2).has(val))
