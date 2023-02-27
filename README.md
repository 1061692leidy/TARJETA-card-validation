
## Sito web Card validator

  Validador de Tarjetas esta página web te permite ingresar número de tarjeta de crédito o débito para verificar si la tarjeta es válida. Está orientado a personas que deseen validar si una tarjeta es válida o es invalida.

¿Cómo usar? Ingresa tu número de tarjeta en el campo "Número de tarjeta". Se aceptan números de tarjeta de crédito y débito Visa, Mastercard, Diner's Club, Discover, JCB y American Express. No puedes dejar el campo del "Número de la tarjeta" en blanco. Haz clic en el botón "Validar" para ver los resultados.

Resultados Si la tarjeta es válida, se muestra un mensaje que indica si es valida, el número de tarjeta enmascarado. Si el número de tarjeta es invalido te arrojara "invalid card".

Si ingresas un formato imcorrecto de informara si " formato invalido"

Aviso de Privacidad No almacenamos tu información personal ni tu número de tarjeta. Toda la información ingresada se utiliza únicamente para verificar la validez de la tarjeta.

Tecnologías utilizadas Esta página web fue desarrollada utilizando HTML, CSS y JavaScript. La validación de la tarjeta se realiza mediante un algoritmo que utiliza el número de la tarjeta, el algoritmo de verificación y la funcion de enmascarar los ultimos 4 numeros por seguridad del usuario.

## Algoritmo de luhn.

Es usado este algoritmo para la validación de tarjetas de crédito para los proyectos ecommerce que desarrollo. Pero hace unos años lo tuve que utilizar para validar el IMEI de las tarjetas SIM en un proyecto para orange por temas de portabilidad.
Su creador fue Hans Peter Luhn, un científico de IBM y se sigue usando el día de hoy.
El algoritmo de Luhn es bastante sencillo:
Una tarjeta de crédito, o una tarjeta SIM, es válida si obteniendo la reversa de este número, y la suma sus dígitos debe ser un múltiplo de 10, es decir que la suma módulo 10 debe ser igual a cero.
Ésto se ve mejor con un ejemplo:
Número de ejemplo: 49927398716
Se multiplica por 2 los dígitos que ocupan las posiciones pares empezando por el final: (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
Se suman los dígitos que ocupan las posiciones impares con los dígitos de los productos obtenidos: 6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70. (1+6) es por la multiplicación de 8x2 y (1+8) es por la multiplicación de 9x2 del primer punto
Si el resto de dividir el total entre 10 es igual a cero, el número es correcto: 70 mod 10 = 0
En intenet hay ejemplos ya programados pero el código ya hecho sería el siguiente:
function luhn($number)

{

$odd = true;

$sum = 0;



foreach ( array_reverse(str_split($number)) as $num)
{

  $sum += array_sum( str_split(($odd = !$odd) ? $num*2 : $num) );
  [fuente](https://blogprog.gonzalolopez.es/articulos/algoritmo-de-luhn.html)

 
 