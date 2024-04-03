// 12. Вы хотите найти совпадения, когда буква sвстречается в Mississippi. Напишите регулярное выражение, использующее этот + знак.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);