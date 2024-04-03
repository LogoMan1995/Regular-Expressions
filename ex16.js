// 16. Используйте символ каретки в регулярном выражении, чтобы найти Cal только начало строки rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

