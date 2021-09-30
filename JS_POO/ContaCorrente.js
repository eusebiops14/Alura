import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; //torna visivel fora da classe
    agencia;
    _cliente;

    
    //assessores
    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    }
    
    get cliente() {
        return this._cliente;
    }

    //construtor
    constructor(agencia,cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0; /* # indica um atributo privado que nao pode ser alterado fora da classe mas ainda nao é oficial. Atualmente usamos o _ como convenção para nos referirmos a um atributo privado de classe */
        ContaCorrente.numeroDeContas += 1; //visivel fora da classe                     
    }
    
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }else {
            //console.log("Saldo de R$",this._saldo, "é insuficiente");
        }
    }
    
    get saldo(){
        return this._saldo;
    }


    depositar(valor){
        if (valor <= 0){
            //console.log("Não é possivel efetuar um depósito com valor negativo!");
            return;
        }else{
            this._saldo += valor;
            //console.log("R$",valor,"depositado com sucesso!");
            //console.log("saldo atual: = ",this._saldo);
        }            
    }

    transferir(valor,conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        //console.log("R$",valor,"transferido para a conta:", conta.cliente);
    }
}