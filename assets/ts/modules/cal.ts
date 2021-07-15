export const sacarPorciento = (valor: number, numero: number) => ((valor * numero) / 100).toFixed(2);

export const sumaTotal = (num: number[]): number => num.reduce((prev, current) => prev + current)

export const generateValor = (valor: number) => {
    let cargos = sacarPorciento(valor, 5);
    let impuesto = sacarPorciento(Number(cargos), 21);
    let total = sumaTotal([valor, Number(cargos), Number(impuesto)])
    return [cargos, impuesto, total];
};
export const valoresRandom = (max = 6000, min = 100) => Math.floor(Math.random() * (max - min)) + min;
