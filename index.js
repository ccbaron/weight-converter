// Buena suerte

const inputPounds = document.querySelector('#input');

inputPounds.addEventListener("input", function(event){

    // 1. Obtener el valor del campo de entrada
    const pounds = event.target.value;
    
    // 2. Convertir libras a kilogramos (1 libra = 0.453592 kg)
    const kilograms = pounds * 0.453592;
    
    // 3. Mostrar el resultado con 2 decimales
    document.querySelector('#result').textContent = kilograms.toFixed(2);
    
    
})

//Alternativa://

/*

const inputPounds = document.querySelector('#input');
const spanResult = document.querySelector('#result');

// asociamos el evento 'input'
inputPounds.addEventListener("input", function(event){

    // pounds a convertir
    const pounds = event.target.value;

    // 1 pound son 0,453592 kg
    // Hay que multiplicar el valor de variable pounds por 0,453592

    // El resultado escribirlo en el nodo #result. Podemos hacer ambas operaciones en una línea
    spanResult.textContent =  (pounds * 0.453592).toFixed(2);
    

})

*/
