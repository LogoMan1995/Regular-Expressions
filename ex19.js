// 19. Используйте класс сокращенных символов, \dчтобы подсчитать количество цифр в названиях фильмов. Записанные цифры («шесть» вместо 6) не в счет.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;


