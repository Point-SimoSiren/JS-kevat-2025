


const asiakkaat = [{id: 1, nimi: "Matias Kelopää", puh: "0502837839"},
    {id: 2, nimi: "Matilda Salonen", puh: "040266659"},
    {id: 3, nimi: "Raimo Pietilä", puh: "040266659"}
]

asiakkaat[0].puh = "1234567"

asiakkaat.forEach(asiakas => {
    console.log("Asiakkaan nimi on " + asiakas.nimi)
    console.log("Asiakkaan puh on " + asiakas.puh)
    console.log("____________________________________________")


})
