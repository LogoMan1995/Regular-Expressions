// 10. Создайте одно регулярное выражение, которое соответствует диапазону букв между h и s и диапазону чисел между 2 и 6. Не забудьте включить соответствующие флаги в регулярное выражение. 

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 
console.log(result);