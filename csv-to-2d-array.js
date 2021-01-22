/*

  Extract csv data into a 2d array
  
  a,b,c    [[a,b,c],
  d,e,f =>  [d,e,f],
  g,h,i     [g,h,i]]

*/

const extractCsvToArray = (csv) => csv.trim().split("\n").map((row) => row.split(","));
