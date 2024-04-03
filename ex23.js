// 23. Измените регулярное выражение countNonWhiteSpace для поиска в строке нескольких символов без пробелов.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace).length;
console.log(result);