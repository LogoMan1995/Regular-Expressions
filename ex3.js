// 3. Заполните регулярное выражение petRegex, чтобы оно соответствовало домашним животным dog, cat, bird, или fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);