let principal = <HTMLInputElement>document.querySelector('#principal');
principal!.addEventListener('input', e => renderValue());
const renderValue = () => {
    const [cargos, impuesto, total] = Array.from(document.querySelectorAll('#cargos'))


    if (principal.value !== '') {
        cargos.value = sacarPorciento(principal.value, 5);
        impuesto.value = sacarPorciento(cargos.value, 21);
        total.value = parseFloat(sumaTotal(impuesto, cargos, principal)).toFixed(2);        // total = total.value.toLocaleString('es-AR', {
    }
    if (principal.value == '0' || principal.value == '') {
        cargos.value = '';
        impuesto.value = '';
        total.value = '';
    }
}
const sacarPorciento = (valor: string, numero: number) => {
    const valorNumber = parseFloat(valor);
    return ((valorNumber * numero) / 100).toFixed(2);
};

const sumaTotal = (val1: HTMLInputElement, val2: HTMLInputElement, val3: HTMLInputElement) => {
    const num1 = parseFloat(val1.value);
    const num2 = parseFloat(val2.value);
    const num3 = parseFloat(val3.value);
    let neto = num1 + num2 + num3;
    return neto == NaN ? '' : neto.toFixed(2);
};

let verTabla = document.querySelector('#VerTabla');
verTabla!.addEventListener('click', (e) => {
/*     e.preventDefault();
 */    let { value: valor } = <HTMLInputElement>document.querySelector('#inputGroupSelect01');
    generateTable(valor);
});

const generateTable = (valor: string) => {
    let padre = document.querySelector('#showTables');
    padre!.innerHTML = '';
    const tabla = document.createElement('table');
    tabla.classList.add('table', 'generateTable');
    tabla.innerHTML = `
  <thead>
  <tr>
      <th scope="col">Envia</th>
      <th scope="col">Cargos</th>
      <th scope="col">Impuesto</th>
      <th scope="col">Total</th>
  </tr>
</thead>
<tbody id="childertable">
</tbody>
`;
    padre!.appendChild(tabla);
    let valoresArray = [];
    for (let i = 0; i < parseInt(valor); i++) {
        valoresArray.push(valoresRandom());
    }
    valoresArray.sort((a, b) => a - b);
    let tablaPadre = document.querySelector('#childertable');
    valoresArray.forEach((valor) => {
        let elemento = document.createElement('tr');
        let lista: any[] = [valor];
        lista.push(generateValor(valor));
        elemento.innerHTML = `
    <td>$ ${lista[0]}</td>
    <td>$ ${lista[1][0]}</td>
    <td>$ ${lista[1][1]}</td>
    <td>$ ${lista[1][2]}</td>`;
        tablaPadre!.appendChild(elemento);
    });
};
const generateValor = (valor: any) => {
    let cargos = sacarPorciento(valor, 5);
    let impuesto = sacarPorciento(cargos, 21);
    let total = (parseFloat(valor) + parseFloat(cargos) + parseFloat(impuesto)).toFixed(2);
    return [cargos, impuesto, total];
};
const valoresRandom = () => Math.floor(Math.random() * (60000 - 100)) + 100;