// 18. Используйте класс сокращенных символов \w для подсчета количества буквенно-цифровых символов в различных кавычках и строках.


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

