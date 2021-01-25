
/*

  Generate a random alphanumeric string
  
  => k56scw6yx
  => jzb3k0ei6
  
  Source: https://gist.github.com/gordonbrander/2230317
  
*/

const fn = () => Math.random().toString(36).substr(2, 9)
