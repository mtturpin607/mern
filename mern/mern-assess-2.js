console.log("Question 1")

const heroes = [
       { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
       { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
       { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
       { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
       { name: 'Batman',         family: 'DC Comics', isEvil: false },
       { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
       { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
       { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
 ]

 
 let marvelNotEvilCnt = 0
 let notEvil = ''
 heroes.forEach(hero => {
    if (hero.isEvil === false) {
        notEvil += ' : '
        notEvil +=  hero.name;
    }
    console.log (`sir ${hero.name}`)
    if (hero.family === "Marvel" && hero.isEvil === true) {
        marvelNotEvilCnt++
    }
 });
console.log(`heroes who aren't evil ${notEvil}`)
const uniqueFamilies = [...new Set(heroes.map(hero => hero.family))];
console.log(`Unique family names ${uniqueFamilies}`)
console.log(`Number Marvel heroes who aren't evil: ${marvelNotEvilCnt}`)



console.log("\nQuestion 2\n")

const vehicles = ["boat", "airplane"];
const vehiclesspread = ["bicycle", ...vehicles, "bus",];

function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

function multiplyWithApply(...numbers) {
    return multiply.apply(null, numbers);
}

arr2 = [1]
n = 6
for (i = 2; i <= n; i++) {
    arr2.push(i);
}

multiplyWithApply(arr2);

console.log("\nQuestion 3\n")

const person = {
         userDetails :{
             first: "FirstName",
             last: "LastName"
         },
         fullName: function () {
            return this.userDetails.first + " " + this.userDetails.last;
            }
        }

const { userDetails: {first, last, contactno = "9119119110"}  } = person;

console.log(last)
console.log(contactno)

console.log("\nQuestion 4\n")

const animal = {name:"bear", family:"mammal", color:"brown", region:"Alaska"}
animal.color = "black"
console.log(animal)

console.log("\nQuestion 5\n")

//for in and for of are both used as iterators in loops
//for in is used for associative types of objects (key, value)
//   example: 
const stateAbbrev = {"Alaska":"AK","California":"CA"}
for (let stateName in stateAbbrev) {
    console.log(stateName)
}
// for of is used for looping through elements in an array
const arr1 = [15, 17, 19]
for (let val of arr1) {
    console.log(val);
}

console.log("\nQuestion 6\n")

// Bind creates a new function that will force the this inside the function to be the parameter passed to bind()
// arrow functions don't have their own 'this' context and instead get get it from the static scope

const member = {
    first:"Brian",
    last: "Nelson",
    }
    
let fullName = person.fullName.bind(member);
console.log(fullName)

console.log("\nQuestion 7\n")
//skipping

console.log("\nQuestion 8\n")

function welcome(name = "John") {
     console.log(`Welcome, ${name}`)
} 
welcome()
welcome('Robert')

console.log("\nQuestion 9\n")

//java script way first
let individual = {firstName:"Jerry",lastName:"Brown",age:32}
let address = {line1:"123 Triangle St", city:"Anytown",country:"England"}

let citizen1 = {...individual, ...address}
console.log(citizen1)

//ES6 way
Object.assign(individual, address)
for (let key of Object.keys(individual)) {
    console.log(key + "=" +individual[key])
}

console.log("\nQuestion 10\n")

const map1 = new Map();

map1.set('house', 1);
map1.set('tree', 2);
map1.set('car', 3);
console.log(map1.get('tree'));
console.log(map1.has('house'));
map1.delete('car');
console.log(map1.size);

const color = new Set('yellow','green','orange','blue');
console.log(color.has('yellow'))
color.add('purple')
color.forEach((color) =>  console.log(color))
color.clear

console.log("\nQuestion 11\n")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved');
    }, 2000);
  
    setTimeout(() => {
      reject('Rejected');
    }, 3000);
  });
  
  myPromise
    .then((message) => {
      console.log(message);
      let x = 1
      const y = 3.14
      z = (x, y) => x * y  //arrow
      console.log(z);
      const company = {
        name: "Sony",
        president: "John Smith",
        founded: 1950,
        headquarters: "Tokyo, Japan"
      }
      let {president, headquarters} = company  // object destructuring
      console.log (`Company president ${president}`)
      const q1mos = ["Jan", "Feb", "Mar"];
      const q2mos = ["Apr", "May", "Jun"];
      const q3mos = ["Jul", "Aug", "Sep"];
      const q4mos = ["Oct", "Nov", "May"];

      const calendar = [...q1mos, ...q2mos, ...q3mos, ...q4mos]
      console.log(calendar)
    })
    .catch((error) => {
      console.error(error);
    });



console.log("\nQuestion 12\n")

const cities = ["Boston", "London"];
const citiesSpread = ["Paris", ...cities, "Sao Paulo", "Lima"];
console.log(citiesSpread)

function multiplyN(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

arr3 = [1]
n = 7
for (i = 2; i <= n; i++) {
    arr3.push(i);
}

multiplyN(arr3);

console.log("\nQuestion 13\n")

function promiseFunction() {
    return myPromise
};

async function asyncAwaitPromises() {
    await promiseFunction()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))
    await promiseFunction()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))
}

asyncAwaitPromises()



console.log("\nQuestion 14\n")

function* myGenFunc(params) {
    yield 1
    yield 2
    yield 3
    return "generator function complete"
}
let mgf = myGenFunc("Initializing")
console.log(mgf.next());
console.log(mgf.next());
console.log(mgf.next());
console.log(mgf.next());

console.log("\nQuestion 15\n")
//statelessness is when the server doesn't store/keep track of the user/client specific info,
// http (hypertext transfer protocol) are web applications that can submit/fetch data
// REST (representational state transfer) are guidelines that specify methods as to how to store, fetch, and receive data
// SPA (single page application) are web apps that load one page document and then, using API's updates content
// classical application - one based on OOP languages such as Java (JS isn't typically considered classical)
