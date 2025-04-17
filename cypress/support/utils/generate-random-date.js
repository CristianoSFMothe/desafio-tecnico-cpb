/**
 * Generates a random date between two given dates
 * @param {Date} startDate - The start date of the range (default: 01/01/2000)
 * @param {Date} endDate - The end date of the range (default: 31/12/2024)
 * @returns {string} Date formatted as dd/mm/yyyy
 */
function generateRandomDate(startDate = new Date(2000, 0, 1), endDate = new Date(2024, 11, 31)) {
  const start = startDate.getTime();
  const end = endDate.getTime();

  const randomTimestamp = start + Math.random() * (end - start);
  const randomDate = new Date(randomTimestamp);

  const day = String(randomDate.getDate()).padStart(2, '0');
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;
}

module.exports = { generateRandomDate };
