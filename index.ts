const partes = ["X", "BJ", "CABJ", "1402", "02", "martin"]


function obtenerNRandoms(n: number): string[] {
    let resultado = [];
    for (const key in Array.from(Array(n).keys())) {
       let rand = randomEntre(0, partes.length-1);
       resultado.push(partes[rand]);
    }
    return resultado;
}

function randomEntre(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generarTextoConNPalabras(n: number): string {
    return obtenerNRandoms(n).join("")
}

function generar(n: string) {
    let res = generarTextoConNPalabras(parseInt(n))
    document.getElementById("resultadoMartin")!.innerHTML = res;
}