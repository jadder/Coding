function AlimentarPersonas(cantidad: number, ingredientes: string[]): string[] {


    for (let i = 0; i < ingredientes.length; i++) {
        let temp: string = ingredientes[i];
        let c: string[] = temp.split(" ");
        let e: number = parseInt(c[0]) * cantidad; // c [0][1]
        c[0] = e.toString();

        ingredientes[i] = c.join(" ");

    }

    return ingredientes;
}

let input: string[] = ["2 eggs", "200 grams of flour", "150 grams of sugar", "1 liter(s) of milk"];

console.log(AlimentarPersonas(8, input));



