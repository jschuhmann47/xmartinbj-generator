const partes = ["X", "BJ", "CABJ", "1402", "02", "martin"]


function obtenerRandoms(n: number): string[] {
    let resultado: string[] = [];
    for (const _ in [...Array(n).keys()]) {
       let rand = randomEntre(0, partes.length-1);
       resultado.push(partes[rand]);
    }
    return resultado;
}

function randomEntre(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generarMartin(n: number): string {
    return obtenerRandoms(5).join("")
}

console.log(generarMartin(5))
