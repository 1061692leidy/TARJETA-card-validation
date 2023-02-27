import validator from './validator.js';

function validate() {//funcion
  //console.log(validator);
  const cardNumber = document.getElementById('tarjeta').value;
  if(cardNumber===''){
    document.getElementById('demo').innerHTML = 'Formato incorrecto'
    return undefined
  }
  const valid = validator.isValid(cardNumber) 
  if (valid){
    document.getElementById('demo').innerHTML = 'Correct card'
  } else {
    document.getElementById('demo').innerHTML = 'Invalid card'
  }}

// Obtener referencia al botón y al elemento de entrada
const validateButton = document.getElementById('Boton');
const cardNumberInput = document.getElementById('tarjeta');
const result = document.getElementById('result');


const Boton = document.getElementById('Boton')
Boton.addEventListener('click', validate);

validateButton.addEventListener('click', function () {
  const cardNumber = cardNumberInput.value;
  const maskedNumber = validator.maskify(cardNumber);
  if (maskedNumber === 'Invalid card number') {
    result.innerHTML = 'Invalid card number';
  } else {
    result.innerHTML = maskedNumber;
  }
});