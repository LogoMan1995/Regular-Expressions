// 6. Используя регулярное выражение starRegex, найдите и извлеките оба Twinkle слова из строки twinkleStar. В регулярном выражении может быть несколько флагов, например   /search/gi.


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);


