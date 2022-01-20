/* Ser autenticavel significa ter o metodo autenticar */


export class SistemaAutenticacao{
    static login(autenticavel,senha){
        return autenticavel.autenticar(senha);
    }
}

//Polimorfismo: diferentes objetos de classes diferentes se comportando da mesma maneira