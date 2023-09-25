class Display {
    constructor(displayValorAnt, displayValorAct) {

        this.displayValorAnt = displayValorAnt;
        this.displayValorAct = displayValorAct;

        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;

        this.valorAct = '';
        this.valorAnt = '';

        this.signos = {
            suma: '+',
            divi: '/',
            multi: '*',
            resta: '-',
        }
    }

    eraseNumeros() {
        this.valorAct = this.valorAct.toString().slice(0,-1);
        this.printValores();
    }

    eraseAll() {
        this.valorAct = '';
        this.valorAnt = '';
        this.tipoOperacion = undefined;
        this.printValores();
    }

    computar(tipo){

        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;

        this.valorAnt = this.valorAct || this.valorAnterior;

        this.valorAct = '';

        this.printValores();

    }

    addNumeros(numero) {
        if(numero === '.' && this.valorAct.includes('.')) return
        this.valorAct = this.valorAct.toString() + numero;
        this.printValores();
    }

    printValores() {
        
        this.displayvalorAct.textContent = this.valorAct;
        this.displayvalorAnt.textContent = `${this.valorAnt} ${this.signos[this.tipoOpreracion] || ''}`;
    }

    calcular() {

        const valorAnterior = parseFloat(this.valorAnt);
        const valorActual = parseFloat(this.valorAct);

        if(isNan(valorActual) || isNan(valorAnterior) ) return

        this.valorActual = this.calculadora[this.tipoOperacion](valorAnt, valorAct);
    }

}