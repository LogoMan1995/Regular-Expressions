// 17. Используйте символ привязки ( $), чтобы соответствовать строке cabooseв конце строки caboose.



let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);