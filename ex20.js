// 20. Используйте класс сокращенных символов для нецифровых символов, \D чтобы подсчитать, сколько нецифровых символов содержится в заголовках фильмов.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;
console.log(result);

