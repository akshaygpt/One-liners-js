/*

  Is the given year a leap year?
  
  1991 => false
  2000 => true
  3000 => false
  
*/

const isLeapYear(year) => year % 4 === 0
                  ? (year % 100 === 0
                    ? (year % 400 === 0 
                      ? true : false)
                    : true)
                  : false;
