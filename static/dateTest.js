const birthday = new Date('2004-05-18');
const now = new Date();
const myAge = new Date(now - birthday).getFullYear() - 1970;

console.log(myAge);

