const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Angka : ", function(angka){
    angka = parseInt(angka);
    
    if(isNaN(angka)){
        console.log("Nilai harus berupa angka")
    }else{
        if(angka>=85){
            grade = "A";
        }else if(angka>= 70){
            grade = "B";
        }else if(angka>= 55){
            grade = "C";
        }else if(angka>= 40){
            grade = "D"
        }else{
            grade = "E"
        }

        console.log("Grade anda adalah : ", grade)
    }
    rl.close();
});