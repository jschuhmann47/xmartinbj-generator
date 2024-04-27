var partes = ["X", "BJ", "CABJ", "1402", "02", "martin"];
function obtenerNRandoms(n) {
    var resultado = [];
    for (var key in Array.from(Array(n).keys())) {
        var rand = randomEntre(0, partes.length - 1);
        resultado.push(partes[rand]);
    }
    return resultado;
}
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generarTextoConNPalabras(n) {
    return obtenerNRandoms(n).join("");
}
function generar(n) {
    var res = generarTextoConNPalabras(parseInt(n));
    document.getElementById("resultadoMartin").innerHTML = res;
}
