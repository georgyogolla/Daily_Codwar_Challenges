
//validating a 4 or 6 digit pin using a regular expression
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN('1234')); 
console.log(validatePIN('123456')); 
console.log(validatePIN('123')); 
console.log(validatePIN('12345'));

//traffick lights
function update_light(color){
    if(color=="green"){
        console.log("yellow");
    }
    else if(color=="yellow")
    { 
        console.log("red");
    } else if(color=="red")
    {
        console.log("yellow")
    } 
    else {
        console.log("I only process red,green, yellow");
        }
}
update_light("green");

//using three middle characters of a string to form a string
function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
 console.log(middle_three('abcdefg'));
 console.log(middle_three('HTML5'));
 console.log(middle_three('Python'));
 console.log(middle_three('PHP'));
 console.log(middle_three('Exercises'));
/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/
function sumTwoSmallestNumbers(numbers) {  
 let ordered = numbers.sort(function(a,b){return a-b;});
let result = 0;

for (let i = 0; i < ordered.length; i++){
  if (i===0){
    result+=ordered[0];
  }
  if (i===1){
    result+=ordered[1];
  }
}
return result;
};

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) { 
      return a - b;
    });
    return numbers[0] + numbers[1];
  };
  sumTwoSmallestNumbers([19, 5, 42, 2, 77]);


function multiple(number){
    let arr = [];
for (let i = 0; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
        arr.push(i);
    }
}
let result = arr.reduce((a,i)=>{
return a+i;
});
return result;
}
console.log(multiple(10));


function updateLight(color){

  if(color=="green"){
      return ("yellow");
  }
  else if(color=="yellow")
  { 
      return ("red");
  } else {
      return ("green")
     
  } 
};


//Given an array of one's and zero's convert the equivalent binary value to an integer.

//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  // your code
  console.log(parseInt(arr.join(''),2))

};

binaryArrayToNumber [1, 1, 1, 1];

function findShort(s){
  const str =  s;
  const strToArray =str.split(" ");
  console.log(strToArray);
  const sorted = strToArray.sort(function(a,b){
    return a.length -b.length;
  });
  console.log(sorted);
  console.log(sorted[0].length);
  };
   findShort("my name is george");


  function findShort(s){
    console.log(Math.min(...s.split(/\s/).map((w) => w.length)));
  }
  findShort("my name is george");

  function findShort(s){
  console.log(s.split(' ').sort(function(a,b){return a.length - b.length}));
  }
  console.log(findShort("due to the killing of"));

  //removing anchro from a url
  function removeUrlAnchor(url){
    return url.split('#')[0];
  }
