// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }


// function calculator(num1, num2, operator) {
//     console.log(operator(num1, num2))
// }

// calculator(6, 3, multiply)



function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitecase = function() {
        console.log("May I take your suitcase?");
    }
}



var bellBoy1 = new BellBoy('Timmy', 19, true, ['French', 'English'])

console.log(bellBoy1.moveSuitecase()) 