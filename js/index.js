"use strict"

const displayValorAnt = document.getElementById('Valor-Ant');
const displayValorAct = document.getElementById('Valor-Act');

const buttNumero = document.querySelectorAll('.numero');
const buttOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnt, displayValorAct);

buttNumeros.forEach(boton => {
    boton.addEventListener('click', ()=> {
        display.addNuemros (boton.innerHTML);

    });

});

buttOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value) )
});