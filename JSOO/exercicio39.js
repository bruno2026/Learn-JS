class carro{
    constructor(marca, cor, gasolinaRestante,consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigirCarro(km){
        
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros){
        this.gasolinaRestante+= litros;
    }
}

let GOL = new carro("VOLKS", "Branca", 100, 14);

GOL.dirigirCarro(100);

console.log(GOL);

GOL.abastecer(30);

//console.log(GOL);