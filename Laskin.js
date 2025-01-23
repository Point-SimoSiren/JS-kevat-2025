var kaava = "";

function laskukaavaan(painike) {
    kaava = kaava + painike;
    document.getElementById("resultField").innerText = kaava;
}

function laske() {
    let tulos = eval(kaava)
    document.getElementById("resultField").innerText = tulos;
}

function empty() {
    kaava = "";
    document.getElementById("resultField").innerText = "";
}