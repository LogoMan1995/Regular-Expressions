// 24. Измените регулярное выражение , чтобы оно соответствовало версии слова favRegex как в американском английском ( favorite), так и в британском английском ( ).favourite

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);