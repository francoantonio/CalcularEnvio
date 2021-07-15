import { sacarPorciento, sumaTotal } from './modules/cal.js';
import { generateTable } from './modules/render.js';
let principal = document.querySelector('#principal');
principal.addEventListener('input', (event) => {
    const [cargos, impuesto, total] = Array.from(document.querySelectorAll('.campos'));
    if (principal.value !== '') {
        cargos.value = sacarPorciento(Number(principal.value), 5);
        impuesto.value = sacarPorciento(cargos.value, 21);
        total.value = sumaTotal([Number(impuesto.value), Number(cargos.value), Number(principal.value)]);
    }
    else {
        cargos.value = '';
        impuesto.value = '';
        total.value = '';
    }
});
let verTabla = document.querySelector('#VerTabla');
verTabla.addEventListener('click', (e) => {
    e.preventDefault();
    let { value } = document.querySelector('#inputGroupSelect01');
    generateTable(Number(value), 'showTables');
});
