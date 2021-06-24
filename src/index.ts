import { sacarPorciento, valoresRandom, sumaTotal } from '../src/calculos/calculos'
import { generateTable } from '../src/calculos/render'
let principal = <HTMLInputElement>document.querySelector('#principal');
principal!.addEventListener('input', e => renderValue());
const renderValue = () => {
    const [cargos, impuesto, total] = Array.from(document.querySelectorAll('.cargos'))
    if (principal.value !== '') {
        cargos.value = sacarPorciento(principal.value, 5);
        impuesto.value = sacarPorciento(cargos.value, 21);
        total.value = sumaTotal(impuesto, cargos, principal)
    } else {
        cargos.value = '';
        impuesto.value = '';
        total.value = '';
    }
}

const verTabla = document.querySelector('#VerTabla');
verTabla!.addEventListener('click', (e) => {
    let { value: valor } = <HTMLInputElement>document.querySelector('#inputGroupSelect01');
    const nodoPadre = document.querySelector('#showTables')
    generateTable(valor, nodoPadre);
});


