// 2. Заполните регулярное выражение waldoRegex, чтобы найти "Waldo"в строке waldoIsHiding буквальное совпадение.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);


