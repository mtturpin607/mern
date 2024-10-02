// Q1: topics: hoisting, callback, objects, closure, bind, overloading

// Q2:
// "Robert " (string), 0.0266 (number), false (boolean), {myname : "Test Me"} (object), 25166665 (number), undefined (undefined), true (boolean),
//  "Robert Jr.", null (object), {} (object), -32767 (number)

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
function userDetails(firstname, lastname, age) {
    console.log("First name: " + firstname);
    console.log("Last name: " + lastname);
    console.log("Age: " + age);
}
userDetails("Fred", "Robinson", 32);

//Q4: 
function doaddition(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
doaddition(2,3,4);
doaddition(2);  // NaN - other parameters are undefined
doaddition(2.3,3); //NaN - third parameter is missing
doaddition("first", 2, "three"); // the 2 is casted to a string and then each is appended

//Q5: a) A closure function is a function which has access to its surrounding/outer scope. For example:

function companyFunc() {
  const name = "MSN";
  function showName() {
    console.log(name);
  }
  return showName;
}

myFunc = companyFunc();
myFunc();

//b. Hoisting is the process by which any and all declarations are moved to the top of its associated scope. For example
console.log(a);
var a = 2;

//c. constructor will create and initialize an object of a class
function Animal(genus, species, commonName) {
    this.genus = genus;
    this.species = species;
    this.commonName = commonName;
}

//Q6: call - to execute a function passing in a list of parameters by reference. Apply - does the same thing except one can pass in an array for the parameters.
//    Both call and apply arexecute immediately. With invoking bind however, it does not execute immediately and its the actual values that are passed

//Q7: first without bind...
var i = 0;

for (i = 0; i < 4; i++) {   
    setTimeout(function(){
        console.log(i)
    }, 1500);
}
// with bind

for (i = 0; i < 4; i++) {   
  setTimeout(
      console.log.bind(console,i)
  , 1500);
}

//Q8: var b = Object.create(null);  // useful if want to create own internal methods to replace getters, setters, toString, etc.

//Q9: merging...
var person = { fname: 'Fred', lname: 'Simpson' };
var interests = { hobbies: 'Swimming', skills: 'JavaScript' };
var address = { addrLine1: '123 Triangle St.', city: 'London', state:'NY'};

var student = Object.assign({}, person, interests, address);

console.log(student);

//Q10 (need to first define type=module within the package.json file): 
import person from './mydata.js';
