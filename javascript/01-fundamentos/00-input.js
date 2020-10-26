var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite algo inútil: ", function(answer) {
    var resp = answer;
    console.log(resp + " foi computado");
    leitor.close();
});