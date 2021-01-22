/* Get file extension from file name

Example: 
resume.pdf => .pdf
webpack.config.js => .js

*/

const fn(s) => s.slice(s.lastIndexOf('.'));
