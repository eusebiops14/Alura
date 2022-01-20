//Conta é uma classe abstrata que só serve para ser herdada e não pode ser instanciada diretamente
export class Conta {
    constructor(saldoInicial,cliente,agencia) {
        if(this.constructor == Conta){
           throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente pois essa é uma classe abstrata"); //lança novo objeto do tipo erro e para a execução do código
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    }
    
    get cliente() {
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor) {//MÉTODO ABSTRATO- NÃO FOI FEITO PARA SER CHAMADO DIRETAMENTE
        
        //metodo está vazio pq deve ser sobrescrito pelos metodos sacar das classes herdeiras (ex: o metodo sacar da conta salario sobrescreve esse metodo)
        throw new Error ("O método Sacar da conta é um método abstrato.")
    }

    _sacar(valor,taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } 

        return 0;
    }
    
    depositar(valor){
        if (valor <= 0){
            return;
        }else{
            this._saldo += valor;
        }            
    }

    transferir(valor,conta) {
        if (this._tipo == "salario"){
            return;
        }

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste() {
        console.log("teste na classe conta");
    }
}

