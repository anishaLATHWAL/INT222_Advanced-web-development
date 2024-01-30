function exampleFunction(){
    if(true){
        var functionscopevar="I am function scoped";
    }
    console.log(functionscopevar);
}
exampleFunction();

// console.log(functionscopevar);  error- functionscopevar is not defined

// function exampleFunction(){
//     if(true){
//         let functionscopevar="I am function scoped";
//     }
//     console.log(functionscopevar);
// }
// exampleFunction();

var exvar="I am global variable."
function func1(){
    let a=3;
    console.log(a);
    // let a=5;
    // console.log(a); 'a' cannot be redeclared..
    var exvar="I am local variable.";
    console.log(exvar);
}
func1();
console.log(exvar);

// Using let
let exlet="I am global variable."
function func1(){
    let a=3;
    console.log(a);
    // let a=5;
    // console.log(a); 'a' cannot be redeclared..
    let exlet="I am local variable.";
    console.log(exlet);  
}  
func1();
console.log(exlet);

// Hoisting with "var"
// console.log(x);  // undefined
// // var x=5;
// console.log(x);


let namee="Anisha Lathwal";
console.log(typeof(namee));
console.log(namee);

let person= {
    Name: "Anisha",
    Age:19,
    isStudent: true
}
console.log(person.Name);

let fruits=[1,"banana","orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Types copercion
console.log(5-"5");
console.log("5"+"5"-"5");
console.log("5"+"5"/"5");  // Apply BODMAS rule
console.log(5+"5");

