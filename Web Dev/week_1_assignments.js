//functions
// Assignment #1
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));
console.log(sum("a", 7));

//Assignment #2
function canVote(age) {
  return age >= 18;
}
console.log(canVote(17));
console.log(canVote(18));

//Complex types
//Assignment #1
function greet(user) {
  return "Hello " + user.name + ". You age is " + user.age;
}

let user1 = {
  name: "harsh",
  age: 20,
  gender: "m",
};
console.log(greet(user1));

//Assignment #2
function greetv2(user) {
  let salutation = "";
  if (user.gender == "f") {
    salutation = "Mrs. ";
  } else if (user.gender == "m") {
    salutation = "Mr. ";
  }

  return "Hello " + salutation + user.name + ". You age is " + user.age + ".";
}

console.log(greetv2(user1));

//Assignment #3
function greetv3(user) {
  console.log(greetv2(user));
  if (user.age >= 18) {
    return "You are eligible to Vote!";
  } else {
    return "You can't Vote.";
  }
}

console.log(greetv3(user1));

//Array of objects
//Assignment #1 - create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
let users = [
                {name: "harsh", age: 20, gender: "male"},
                {name: "harkirat", age: 17, gender: "male"},
                {name: "sharma", age: 16, gender: "male"},
                {name: "verma", age: 26, gender: "female"},
                {name: "khatri", age: 48, gender: "female"},
                {name: "khan", age: 34, gender: "male"}
            ];

function filterUsers(users){
    for(let i = 0; i<users.length; i++){
        if(users[i].age >= 18 && users[i].gender == "male"){
            console.log(users[i]);
        }
    }
    return "";
}
filterUsers(users);