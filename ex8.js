// 8. Используйте класс символов с гласными ( a,,,,, e) в регулярном выражении i, чтобы найти все гласные в строке ouvowelRegex quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
console.log(result)




