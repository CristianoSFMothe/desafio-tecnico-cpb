/**
 * Generates an acronym based on the words of a string
 * @param {string} name - The name to convert into an acronym
 * @param {number} lettersPerWord - Number of letters to take from each word (default: 1)
 * @returns {string} - The generated acronym in uppercase
 */
function generateAcronym(name, lettersPerWord = 1) {
  return name
    .split(' ')
    .map(word => word.slice(0, lettersPerWord))
    .join('')
    .toUpperCase();
}

module.exports = { generateAcronym };
