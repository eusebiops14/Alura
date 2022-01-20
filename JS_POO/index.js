import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao} from "./SistemaAutenticacao.js";
import { Conta } from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

/*
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


console.log(contaSalario);*/

const diretor = new Diretor("Rodrigo",10000,12345678900);
const gerente = new Gerente("Ricardo",5000,123456789501);

diretor.cadastrarSenha(123456789);

const estaLogado = SistemaAutenticacao.login(diretor,"123456789");
console.log(estaLogado);
console.log("FIM");