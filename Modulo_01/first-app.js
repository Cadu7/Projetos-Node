//  // primeiros códigos
//  const fs = require('fs'); // import something and put in a variable
//  
//  fs.writeFileSync('hello.txt', 'hello from node.js again'); // use fs to create a file
//  
//  console.log("Hello from node.js");

// JavaScript refresh
// variable and functions declarions
//const hasHobbies = true;
//const name = 'cadu';
//var age = 28;
//
//const sumUser = ( name , age , hasHobbies) => {
//
//    return ('name is ' + name + ' and the user has hobies: ' + hasHobbies+ ' and his age is ' + age) ;
//
//}
//const plus = ( a , b ) => a + b;
//const addOne = a => a+1;
//
//console.log(addOne(5));
//console.log(plus(1 , 5));
//
//console.log(sumUser(name , age , hasHobbies));

// Object in JS
//const person = {
//    name: 'cadu',
//    age:18,
//    //greet: function(){
//    //    console.log('Hello, i am ' + this.name);
//    //}
//    greet(){
//        console.log('Hello, i am ' + this.name);
//    }
//};
// const copiedPerson = {...person}
//person.greet();
//console.log(person);

// Arrays and spread
// const hobbies = ['Sports', 'Cooking', 1 , true];
//  // for(let hobby of hobbies){
//  //     console.log(hobby);
//  // } 
//  //console.log(hobbies.map(hobby=> 'Hobby ' + hobby));
//  //console.log(hobbies)
// 
// hobbies.push('programming');
// const copiedArray1 = hobbies.slice();
// const copiedArray2 = [hobbies]
// const copiedArray3 = [...hobbies]
// console.log(copiedArray1)
// console.log(copiedArray2)
// console.log(copiedArray3)
// 
// const toArray = (...args) => {
//     return args;
// };
// 
// console.log(toArray(1,2,3,4,5,6));

// Desconstructor
// const person = {
//     name: 'cadu',
//     age:18,
//     greet(){
//         console.log('Hello, i am ' + this.name);
//     }
// };
// 
// const printName = ({ name }) => {
//     console.log(name);
// }
// 
// printName(person);
// 
// const {name, age} = person;
// console.log('The name is ' + name + " and the age is" + age);


const fetchData = () => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;
};

setTimeout(() =>{
    console.log('Timer is gone');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 =>{
        console.log(text2);
    })
}, 2000);










