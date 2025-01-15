
console.log("Tervetuloa pelaamaan numeroarvauspeliä")

var random = Math.floor(Math.random() * 11)

const readline = require('readline')

// Luodaan readline-rajapinta
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function arvaus() {
// Kysytään käyttäjän syötettä
rl.question('Arvaa luku väliltä 1-10: ', (input) => {
     
    // Muutetaan syöte kokonaisluvuksi
   var number = parseInt(input, 10)
 
    if (number > random) {
        console.log("Oikea luku on pienempi")
        arvaus()
    }
    else if(number < random) {
        console.log("Oikea luku on suurempi")
        arvaus()
    }
    else {
        console.log("Arvasit oikein!")  
        rl.close()
    }   
})
}

arvaus()