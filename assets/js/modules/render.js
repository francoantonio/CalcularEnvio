import { valoresRandom, generateValor } from "./cal.js";
export const generateTable = (valor, nodo) => {
    let padre = document.querySelector(`#${nodo}`);
    padre.innerHTML = '';
    const tabla = document.createElement('table');
    tabla.classList.add('table', 'generateTable');
    tabla.innerHTML = `<thead><tr>
      <th scope="col">Envia</th>
      <th scope="col">Cargos</th>
      <th scope="col">Impuesto</th>
      <th scope="col">Total</th></tr>
</thead><tbody id="childertable"></tbody>
`;
    padre.appendChild(tabla);
    let valoresArray = [];
    for (let i = 0; i < valor; i++) {
        valoresArray.push(valoresRandom());
    }
    valoresArray.sort(function (a, b) {
        return a - b;
    });
    let tablaPadre = document.querySelector('#childertable');
    valoresArray.forEach((valor) => {
        let elemento = document.createElement('tr');
        let lista = [valor];
        lista.push(generateValor(valor));
        elemento.innerHTML = `
    <td>$ ${lista[0]}</td>
    <td>$ ${lista[1][0]}</td>
    <td>$ ${lista[1][1]}</td>
    <td>$ ${lista[1][2]}</td>
    `;
        tablaPadre.appendChild(elemento);
    });
};
