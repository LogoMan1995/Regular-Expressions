// 4. Напишите регулярное выражение fccRegex для соответствия freeCodeCamp независимо от его регистра. Ваше регулярное выражение не должно соответствовать никаким сокращениям или вариантам с пробелами.



let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);