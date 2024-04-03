// 13. Для этой задачи chewieQuote было инициализировано как строка Aaaaaaaaaaaaaaaarrrgh! за кулисами. Создайте регулярное выражение chewieRegex, которое использует этот * символ для соответствия символу верхнего регистра, A за которым сразу следует ноль или более a символов нижнего регистра в chewieQuote. Вашему регулярному выражению не нужны флаги или классы символов, и оно не должно совпадать ни с какими другими кавычками.



let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);