function getFullYear() {
    return 2024
  }
  
  function getFooterCopy(isIndex) {
    if (isIndex === true) {
      return 'Holberton School'
    } else {
      return 'Holberton School main dashboard'
    }
  }
  
  export { getFullYear, getFooterCopy };