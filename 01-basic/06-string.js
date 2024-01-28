//`````````````````````string```````````````````

const name = "mrhabe3b-com-world";
const repoCount = 50;

//old way of string concatenation 
// console.log(name + repoCount + "number");
// modern way that is string interpolation ' `` '
//console.log(`welcome ${name} and repo count is ${repoCount} `);


// two ways to declare a string
 
// first ways 
const humKonHai = "insan";
// second ways
const woKonHai = new String('Animal')// have multiply features

// console.log(woKonHai[0]);
// console.log(woKonHai.__proto__);
// console.log(woKonHai.toUpperCase());// convert lowercase to uppercase
// console.log(woKonHai.charAt(1));// position
// console.log(woKonHai.length);// length
// console.log(woKonHai.indexOf('l')); //To known the index value

//substring

const maiHoBhai = woKonHai.substring(0,4);// you cannot give negative value in substring
//console.log(maiHoBhai);

//slice 

const tumHaiBhai = woKonHai.slice(-5,4);
//console.log(tumHaiBhai);

//trim

const yaadNahiBhai = "  mrhabe3b   ";
// console.log(yaadNahiBhai);
// console.log(yaadNahiBhai.trim());

// replace

const url = "https://mrhabe3b.com/mrhabe3b%100grad";

// console.log(url.replace('%100','-'));
 // to known wheather it is there or not
// console.log(url.includes('model'));

//split  'to convert string into array'
console.log(name.split('-'));