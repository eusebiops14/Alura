class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; /* # indica um atributo privado que nao pode ser alterado fora da classe mas ainda nao é oficial. Atualmente usamos o _ como convenção para nos referirmos a um atributo privado de classe */

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }else {
            console.log("Saldo insuficiente");
        }
    }

    depositar(valor){
        if (valor <= 0){
            console.log("Não é possivel efetuar um depósito com valor negativo!");
            return;
        }else{
            this._saldo += valor;
            console.log("R$",valor,"depositado com sucesso!");
            //console.log("saldo atual: = ",this._saldo);
        }            
    }
}

const contaCorrenteRicardo = new ContaCorrente();

/*contaCorrenteRicardo._saldo = 100; -o cerquilha torna o atributo saldo privado e impede a alteracao  */
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
/* console.log(contaCorrenteRicardo._saldo); nao se deve acessar o atributo saldo da classe conta corrente fora da classe */

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);