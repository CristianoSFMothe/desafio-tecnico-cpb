// /**
//  * Generates a random date between two given dates
//  * @param {Date} startDate - The start date of the range
//  * @param {Date} endDate - The end date of the range
//  * @returns {string} Date formatted as dd/mm/yyyy
//  */
// function generateRandomDate(startDate, endDate) {
//   const start = startDate.getTime();
//   const end = endDate.getTime();

//   const randomTimestamp = start + Math.random() * (end - start);
//   const randomDate = new Date(randomTimestamp);

//   const day = String(randomDate.getDate()).padStart(2, '0');
//   const month = String(randomDate.getMonth() + 1).padStart(2, '0');
//   const year = randomDate.getFullYear();

//   return `${day}/${month}/${year}`;
// }

// module.exports = { generateRandomDate };
