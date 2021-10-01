import { Cliente } from "./Cliente.js";

export class ContaCorrente extends Conta { //tudo que esta disponivel na classe conta também estará disponivel na classe ContaCorrente
    static numeroDeContas = 0; //torna visivel fora da classe
   
    //construtor
    constructor(agencia,cliente) {
        super();
        ContaCorrente.numeroDeContas += 1; //visivel fora da classe                     
    }
    
}