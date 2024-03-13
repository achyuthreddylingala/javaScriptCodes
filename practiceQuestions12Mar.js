//Q1.Write a JavaScript program to print "Hello, World!" to the console.
console.log('Hello World!');
//Q2. Declare variables of different data types (string, number, boolean) and perform operations on them (concatenation, arithmetic operations, comparison).
let fName="sunny";
let lName="reddy";
console.log(fName+" "+lName);
let num1 = 10;
let num2 = 20;
console.log(num1*num2);
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1%num2);
let isAdult = true;
let isEqual = num1 === num2;
let isGreaterThan = num1 > num2;
let isAdultString = isAdult ? "Yes" : "No";

console.log("Is num1 equal to num2? " + isEqual);
console.log("Is num1 greater than num2? " + isGreaterThan);
console.log("Is Adult? " + isAdultString);


//Q3. Write a program to check if a number is even or odd using conditional statements (if-else).
let number1=8;
if(number1%2==0){
    console.log(number1 +" "+ "is  Even");
} else {
    console.log(number1 +" "+ "is Odd");
}

//Q4.Write a program to print the first 10 numbers in the Fibonacci sequence using a loop (for loop or while loop).
let firstNumber = 0;
let secondNumber = 1;
console.log(firstNumber);
console.log(secondNumber);
let count = 2;
while(count<10){
    let  nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);
    firstNumber = secondNumber;
    secondNumber= nextNumber;
    count++
}

//using for loop
let numb1 = 0;
let numb2 = 1;
console.log(numb1);
console.log(numb2);
let count1 = 2;
for(count1=2;count1<10;count1++){
    let nextNum = numb1 + numb2;
    numb1=numb2;
    numb2=nextNum;
    console.log(nextNum);
}


//Q5. Write a function to calculate the factorial of a number recursively.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 5:", factorial(5)); 
console.log("Factorial of 0:", factorial(0)); 
console.log("Factorial of 1:", factorial(1)); 


//Q6. Declare an array of numbers and write a program to find the sum of elements in the array.
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < list.length; i++) {
    if (i < list.length) {
        sum = sum + list[i];
    }
}
console.log(sum);



//Q7. Declare an array of numbers and write a program to find the average of elements in the array.
let elements=[1,2,3,4,5,6,7,8,9,10]
let average = 0;
for(let i = 0; i <= elements.length-1 ; i ++){
    average = average +elements[i]/elements.length;}
console.log('The Average is :',average);


//Q8. Create an object representing a person with properties like name, age, and country. Access and modify the properties of the object.
let person = {
    name:  'John Doe' ,
    age:  30,
    country: 'India'
};
console.log(person.name, person.age, person.country)
person.name = 'sunny reddy';
person.age = 23;
person.country = 'Canada';
console.log(person.name , person.age, person.country);