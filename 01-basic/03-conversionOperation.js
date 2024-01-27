
```number , string conversion```

let Mark = 60;
// value of Mark is number 
let MarkLevel = "exellents"

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

``` boolean conversion ```

let IsLoggedIn = "mrhabe3b";
let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true : 0 => false
// "" => false
// "mrhabe3b" => true

