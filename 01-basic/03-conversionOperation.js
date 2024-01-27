//"number , string conversion"

let Mark = 60;
// value of Mark is number 
let MarkLevel = "exellents";

//console.log(typeof Mark);// ONE way to check the value type "Mark"
//console.log(typeof(Mark));// SECOND way to check the value type "Mark"

let ValueInString = String (Mark);
//Here we convert number to string
//console.log(typeof ValueInString);
//console.log(ValueInString);

let ValueInNumber = Number (MarkLevel);
//here we convert string to number 
//console.log(typeof ValueInNumber);
//console.log(ValueInNumber);

// 60 = "66" 
//"exellent" => NaN
// "true" => 1 : "false" => 0

//" boolean conversion "

let IsLoggedIn = "mrhabe3b";
let booleanIsLoggedIn = Boolean(IsLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true : 0 => false
// "" => false
// "mrhabe3b" => true

// `````````````````````operators````````````````````````````

let value = 2;
let minusValue = -value;
//console.log(minusValue);

// console.log(2+2); //"+" to add
// console.log(2-2);  // "-" to subract 
// console.log(2*2); // "*" to multiply
// console.log(2/2); // "/" to divide
// console.log(2%2); // "%" to  get reminder


//using operator in string 
let str1 = "welcome";
let str2 = " mrhabe3b";

let str3 = str1 + str2;

console.log(str3);

// console.log("1" + 2); //recall the documentation of best possible answer
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 +"2");

// console.log(3+4 * 5 % 3);// it is bad practice in production work

// console.log(+true);// it is aslo bad practice 
// console.log(+"");// it is aslo bad practice 

let gameController = 404;
//++gameController;//prefix operator
gameController++;// postfix operator
console.log(gameController);
