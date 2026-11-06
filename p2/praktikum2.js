const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan angka faktorial: ", function(angka){

    let hasil = 1;
    for (let i = 1; i <= angka; i++) {
        hasil = hasil * i;
    }

    console.log("faktorial", angka, "=", hasil);

    rl.close();
});