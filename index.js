// console.log("hello world");
// let name = "Sunny"; //used to declare a variable which can be changed later in the program.
// console.log(name);//used to fetch and display in the console
// //rules for naming a variable
// //names cannot b a reserved keyword
// //should be meaning full and descriptive
// // names cannot be starting with a number
// //cannot ontain a space or hifun, we can use camel notation
// //names are case sensitive
// //we can declare multiple  variables in one statement using commas
// let firstName="Sunny", lastName="lingala";
// console.log(firstName);
// console.log(lastName);
// const intrestRate = 0.3;//using const to declare a variable  that will not change throughout the program
// console.log(intrestRate);
// let name="santhu";//string
// let age=24;//number
// let isMarried=false;//boolean
// let firstName = undefined;
// let LastName = null;//null primitive types used to clear the value of a variable

//objects in js

// let name = "sunny";//sometimes we create multiple variables to define multiple
// //attributes of the same thing to avoid that repetion of defing multiple loops/
// //we use objects
// let age = 30;
// let person = {
//     name: 'sunny',
//     age: 30
// };
// console.log(person.name +" "+ person.age);
// console.log(person)
// //we can use the dot notation to change the value of a variable in  an object
// person.name='santhu';
// console.log(person.name+" "+person.age);
// //the same can be done using bracket notation
// person['name'] = 'madhu';
// console.log(person.name+ " " +person.age);


//arrays in js
//we use arrays to store list.
//the objects in the array and its sizes are dynamic.
let selectedColors = ['red','blue','green'];
selectedColors[3]  = 'white';
console.log(selectedColors);
console.log(selectedColors[1]);



//funtions in js
//function to perform a task
function greet(name, lName){ //here name is the parameter for the function called greet
    console.log("Hello"+" " +name + ' '+lName);
}
greet('sunny','reddy'); //Here we are passing an argument in  the place of the parameter so it becomes optional
                //and if you don't pass any arguments then by default it will take undefined as the argument
greet('bunny');
//types of functions
//calculating a value
function square(number){
    return number*number;
}
console.log(square(2));



//loops in js
//for loop
for(let i =0;i<5;i++)//Syntax:
//for(initialExpression; condition; increment/decrement)
{
    if(i%2!=0){
        console.log(i +"is an odd number")
    }
}

//ifelse
let age=9;
if(age<18){
    console.log(age+' is not adult');
}else if(age>18){
    console.log(age+' is an adult');
}else{
    console.log(age+' is a teenager');
}

//Write a logic which displays the message based on the hoyr and if the hour is between 6am to 12 pm we enter good morning or if it is between 12pm to 6 pm we enter good afternoon. Otherwise, its is good evening.
let hour = 10;
if(hour<12 && hour>6){
    console.log(hour + 'am - goodmorning')
    } else if (hour>=12 && hour<=18){
        console.log(hour + 'pm -goodafternoon')
}else(console.log(hour + 'pm -goodevening'))
