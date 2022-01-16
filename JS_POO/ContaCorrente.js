//import { Cliente } from "./Cliente.js";
import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta { //tudo que esta disponivel na classe conta também estará disponivel na classe ContaCorrente
    static numeroDeContas = 0; //torna visivel fora da classe
   
    //construtor
    constructor(cliente,agencia) {
        super(0,cliente,agencia); //super faz referencia a classe mae (nessa caso a classe mae é a classe Conta)
        ContaCorrente.numeroDeContas += 1; //visivel fora da classe                     
    }

    
    
    sacar(valor) { //sobrescreve o metodo sacar na classe conta
        
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}