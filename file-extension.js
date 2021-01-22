/* 

  Get file extension from file name

  resume.pdf => .pdf
  webpack.config.js => .js
  
*/

const getFileExtension(s) => s.slice(s.lastIndexOf('.'));
