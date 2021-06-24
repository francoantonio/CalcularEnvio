export const sacarPorciento = (valor: string, numero: number) =>
    ((parseFloat(valor) * numero) / 100).toFixed(2);
;
export const valoresRandom = () => Math.floor(Math.random() * (60000 - 100)) + 100;
export const generateValor = (valor: any) => {
    let cargos = sacarPorciento(valor, 5);
    let impuesto = sacarPorciento(cargos, 21);
    let total = (parseFloat(valor) + parseFloat(cargos) + parseFloat(impuesto)).toFixed(2);
    return [cargos, impuesto, total];
};
/* export const sumaTotal = (val1: HTMLInputElement, val2: HTMLInputElement, val3: HTMLInputElement) => {
    const num1 = parseFloat(val1.value);
    const num2 = parseFloat(val2.value);
    const num3 = parseFloat(val3.value);
    let neto = num1 + num2 + num3;
    return neto == NaN ? '' : neto.toFixed(2);
}; */
export const sumaTotal = (val1: HTMLInputElement, val2: HTMLInputElement, val3: HTMLInputElement) => (parseFloat(val1.value) + parseFloat(val2.value) + parseFloat(val3.value)).toFixed(2)