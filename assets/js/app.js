let principal = document.querySelector('#principal');
principal.addEventListener('keyup', (event) => {
  var cargos = document.querySelector('#cargos');
  var impuesto = document.querySelector('#impuesto');
  var total = document.querySelector('#total');

  if (principal.value !== '' && principal !== NaN) {
    cargos.value = sacarPorciento(principal.value, 5);

    impuesto.value = sacarPorciento(cargos.value, 21);
    total.value = parseFloat(sumaTotal(impuesto, cargos, principal)).toFixed(2);
    total = total.value.toLocaleString('es-AR', {
      currency: 'ARS',
    });
  }
  //Limpia los otros campos si el valor de principal es "" o 0
  if (principal.value == '' || principal.value == 0) {
    cargos.value = '';
    impuesto.value = '';
    total.value = '';
  }
});

const sacarPorciento = (valor, numero) => {
  valor = parseFloat(valor);

  return parseFloat((valor * numero) / 100).toFixed(2);
};

const sumaTotal = (val1, val2, val3) => {
  num1 = parseFloat(val1.value);
  num2 = parseFloat(val2.value);
  num3 = parseFloat(val3.value);
  let neto = num1 + num2 + num3;
  return neto == NaN ? '' : parseFloat(neto).toFixed(2);
};

let verTabla = document.querySelector('#VerTabla');
verTabla.addEventListener('click', (e) => {
  e.preventDefault();
  let valor = document.querySelector('#inputGroupSelect01').value;

  generateTable(valor);
});

const generateTable = (valor) => {
  let padre = document.querySelector('#showTables');

  padre.innerHTML = '';
  /*   console.log(`vamos a mostrar una tabla con ${valor}`); */
  tabla = document.createElement('table');
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

  /* for (const valora of valoresArray) {
    let elemento = document.createElement('tr');
    elemento.innerHTML = `
    <td>$ ${valora[0]}</td>
    <td>$ ${valora[1]}</td>
    <td>$ ${valora[2]}</td>
    <td>$ ${valora[3]}</td>
    `;
    tablaPadre.appendChild(elemento);
  } */
};
const generateValor = (valor) => {
  let cargos = sacarPorciento(valor, 5);

  let impuesto = sacarPorciento(cargos, 21);

  let total = (parseFloat(valor) + parseFloat(cargos) + parseFloat(impuesto)).toFixed(2);

  return [cargos, impuesto, total];
};
const valoresRandom = () => {
  max = 60000;
  min = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};
/* const valoresRandom = () => {
  max = 60000;
  min = 100;
  let principal = Math.floor(Math.random() * (max - min)) + min;

  let cargos = sacarPorciento(principal, 5);

  let impuesto = sacarPorciento(cargos, 21);

  let total = (parseFloat(principal) + parseFloat(cargos) + parseFloat(impuesto)).toFixed(2);

  return [principal, cargos, impuesto, total];
}; */
