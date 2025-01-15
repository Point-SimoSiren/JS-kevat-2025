
const puhelimet = ["Samsung", "Apple", "Honor", "Nokia", "One Plus"]

//console.log(puhelimet[1])

console.log("Puhelimia on " + puhelimet.length + " kpl.")

// FOREACH
puhelimet.forEach(p => console.log(p))

console.log("--------------------------------------")

puhelimet.push("Motorola")

// FOR
for (var i = 0; i < puhelimet.length; i++) {
    if (puhelimet[i] === "Nokia") {
        console.log("Tämä on Suomesta: " + puhelimet[i])
    }
    else {
    console.log(puhelimet[i])
    }
}
