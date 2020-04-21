class conta{
    constructor(saldoCC, saldoCP,juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros= juros;
    }
}

conta.prototype.saque = function(valor){
    this.saldo-=valor;
}

conta.prototype.deposito = function(valor){
    this.saldo+=valor;
}

conta.prototype.transferencia = function(valor){
    this.saldoCP-=valor;
    this.saldoCC+=valor;
}


let CC = new conta(100, 50, 0.1);

console.log(CC);

CC.transferencia(20);

console.log(CC);