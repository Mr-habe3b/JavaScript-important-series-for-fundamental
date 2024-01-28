// primative data types

// 7 primative data types 
// 01-String
// 02-Number
// 03-Boolean
// 04-null
// 05-undefined
// 06-Symbol
// 07-BigInt

//string
const name = "mrhabe3b";
//number
const age  = 18;
//Boolean
const IsLoggedIn = false;
//null
const insideTemp = null;
//undefined
let UserEmail;// question for you undefined value not declared in const why ?
//symbol
const id = Symbol('123');
const anotherId = Symbol('123');
//if we declared the same  number in symbol but it store as unquic  
// console.log(id === anotherId);
//typeof 'id' 'for checking case'
// console.log(typeof id);
// BigInt 
const BigNumber = 3568974158263954646n;
//'n' at last we add for bigint 
// console.log(BigNumber);



// Reference (non primative data type)
// 3 types
// 01-Array
// 02-Object
// 03-function

//array
const superHeroes =["superman","ironMan","hulk"]

//object
let myobj ={
    userName:"mrhabe3b",
    userAge:18,
}

//function
const myFunction = function(){
     console.log("welcome to tech world");
}

// console.log(typeof myFunction);//typeof used to known type 
// console.log(superHeroes);//array 
// console.log(myobj);//object 

//````````````Stack memory `````````Heap Memory `````````````

//Stack (primitive), Heap (non-primitive)

let myInstagramName = 'mr_habe3b';
let anotherName = myInstagramName;
// In Stack we get copy data { primative types}
anotherName ="ateeq-feroz"

console.log(myInstagramName);
console.log(anotherName);

//heap

let userYou = {
 email:"mrhabe3b@google.com",
 upi:"user@ybl",
}
// reference it changes it original data
let userMe = userYou

userMe.email= "hello@enjoy.com"
//out of heap
console.log(userYou.email);

