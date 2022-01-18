import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente('Ricado','1234567898-00');

const contaCorrenteRicardo = new ContaCorrente(0,cliente1,1001);
//contaCorrenteRicardo.depositar(500);
//contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca (50,cliente1,1001);
//const conta = new Conta(0,cliente1,1001);

//console.log(contaCorrenteRicardo);
//console.log(contaPoupanca);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


console.log(contaSalario);