/* Ser autenticavel significa ter o metodo autenticar */
/* o fato de a classe sistema de autenticação poder trabalhar com objetos de diferentes classes sem ter problema
é chamado de ducky type, e é uma característica de linguagens fracamente tipadas
wikipedia: Duck typing in computer programming is an application of the duck test—"If it walks like a duck and it quacks like a duck, then it must be a duck"—to 
determine whether an object can be used for a particular purpose
*/

export class SistemaAutenticacao{
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; //verifica se a chave autenticar existe dentro do objeto autenticavel
    }
}

//Polimorfismo: diferentes objetos de classes diferentes se comportando da mesma maneira