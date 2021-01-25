/*

  Remove duplicate characters from a string
  
  abcbc => abc
  xxxxx => x

*/

const fn = (s) => [...new Set(s.split(""))].join("");
