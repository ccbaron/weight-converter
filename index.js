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