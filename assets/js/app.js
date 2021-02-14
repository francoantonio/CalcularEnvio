/* const elemento = document.querySelector('#forumulario'); */

/* elemento.addEventListener('submit', (event) => {
  event.preventDefault();
  var principal = document.querySelector('#principal');
  var cargos = document.querySelector('#cargos');
  var impuesto = document.querySelector('#impuesto');
  var total = document.querySelector('#total');

  if (principal.value !== '') {
    cargos.value = parseFloat((principal.value * 5) / 100).toFixed('');
    impuesto.value = parseFloat((cargos.value * 21) / 100).toFixed(2);
    total.value = (parseFloat(principal.value) + parseFloat(cargos.value) + parseFloat(impuesto.value)).toFixed(2);
  }
}); */

$('#principal').on('keyup', () => {
  console.log('captado');

  var principal = document.querySelector('#principal');
  var cargos = document.querySelector('#cargos');
  var impuesto = document.querySelector('#impuesto');
  var total = document.querySelector('#total');

  if (principal.value !== '') {
    cargos.value = parseFloat((principal.value * 5) / 100).toFixed('');
    impuesto.value = parseFloat((cargos.value * 21) / 100).toFixed(2);
    total.value = (parseFloat(principal.value) + parseFloat(cargos.value) + parseFloat(impuesto.value)).toFixed(2);
  }
});
if ($("#principal").val() == "" || $("#principal").val()== 0 || $("#principal")){
    console.log("Valor cero")
    $("#cargos").val("")
    $("#impuesto").val("")
    $("#total").val("")
}