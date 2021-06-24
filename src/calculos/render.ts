import { valoresRandom, generateValor } from './calculos'
export const generateTable = (valor: string, nodo: Element | null,) => {
    nodo!.innerHTML = '';
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
    nodo!.appendChild(tabla);
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