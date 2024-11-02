function SayHelloWorld() {
    console.log("Hello World")
}

SayHelloWorld();

function CriarMensagem(msg: string) {
    console.log(msg);

} 

CriarMensagem ("hj tem corinthians!! ");
CriarMensagem ("hj tem corinthians!! 1");
CriarMensagem ("hj tem corinthians!! 2");
CriarMensagem ("hj tem corinthians!! 3");
CriarMensagem ("typescript"); 



function LogMensagem(logar: Boolean,
   msg: string, autor: string){
    if (logar === true ) {
        console.log(`a mensagem ${msg} foi enviada por ${autor}`)
    }
   } 

LogMensagem(true,'log realizado', 'augusto' );
LogMensagem(true,'log realizado 2', 'augusto' );



function somar(numUm: number, numDois: number) {
    return numUm + numDois;
}

const resultado = somar ( 5, 5);
console.log ("O resultado é: ", resultado);


function subtrair( numUm: number, numDois: number):number{
     return numUm - numDois;
}

subtrair(3, 3)
console.log("O resultado é: ", subtrair (3,3))



Calculadora("somar ", 10, 30);
Calculadora("subtrair ", 40, 100);
Calculadora("dividir ", 40, 2);

function Calculadora(Operacao:string, n1: number, n2:number,){
    if( Operacao === "somar"){
        return n1 + n2;
}else if(Operacao === "subtrair"){
    return n1 - n2;
} else if(Operacao == "dividir") {
    return n1 / n2;
}else if(Operacao === "multiplicar"){
    return n1 * n2;
}
}

console.log (Calculadora("somar", 10,30))
console.log (Calculadora("subtrair", 40,100))
console.log (Calculadora("dividir", 40,2))
console.log (Calculadora("multiplicar", 50,3))