// 22. Измените регулярное выражение countWhiteSpace для поиска нескольких пробельных символов в строке.



let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);
