
// Halutaan saada "Anna Kuusisto"
let email = "anna.kuusikonkarahka@hus.fi"

let nimiOsa = email.split("@")[0]

//console.log(nimiOsa)

let etunimi = nimiOsa.split(".")[0]
let sukunimi = nimiOsa.split(".")[1]

//console.log(etunimi)
//console.log(sukunimi)

etunimi.replace("a", "A")

let etunimiOikein = etunimi.replace(etunimi.charAt(0), etunimi.charAt(0).toUpperCase())
let sukunimiOikein = sukunimi.replace(sukunimi.charAt(0), sukunimi.charAt(0).toUpperCase())


console.log(etunimiOikein + " " + sukunimiOikein)


//----------------------------------------------------------

let hakuSana = "Porv"
let paikka = "Porvoon uimahalli"

 // if (paikka.indexOf(hakuSana) > -1) {
if (paikka.includes(hakuSana)) {
    console.log("Löytyi: " + paikka)
}
else {
    console.log("Hakusanalla ei löydy tietoja.")
}
