const convertDateTime = (dateTime) => {
const dateObject = new Date(dateTime);
const day = dateObject.getDate().toString().padStart(2, '0');
const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
const year = dateObject.getFullYear();

const formattedDate = `${day}-${month}-${year}`;

console.log(formattedDate); 
return formattedDate}

module.exports = convertDateTime