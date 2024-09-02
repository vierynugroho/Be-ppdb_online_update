// const convertDateTime = (dateTime) => {
// const dateObject = new Date(dateTime);
// const day = dateObject.getDate().toString().padStart(2, '0');
// const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
// const year = dateObject.getFullYear();

// const formattedDate = `${day}-${month}-${year}`;

// console.log(formattedDate); 
// return formattedDate}

// module.exports = convertDateTime

// convertDateTime.js
const convertDateTime = (dateTime) => {
  if (!dateTime) return null; // Menangani nilai null atau undefined

  const dateObject = new Date(dateTime);
  if (isNaN(dateObject.getTime())) return null; // Menangani format tanggal yang tidak valid

  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

module.exports = convertDateTime;
