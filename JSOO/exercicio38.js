class endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }
}

let novoEndereco = new endereco("rua serra dos agudos", "rosemary", "Itapevi", "SP");



console.log(novoEndereco);

novoEndereco.novaRua = "teste";

console.log(novoEndereco);