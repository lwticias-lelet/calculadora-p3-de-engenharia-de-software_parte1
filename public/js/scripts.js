
function insert(num){
    var numero =document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = numero+num;
}
function clean(){
    document.getElementById('resultado').innerHTML="";

    
}
function back(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML =resultado.substring(0, resultado. length -1);

}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    try {
        var resultadoCalculado = eval(resultado);

        if (isNaN(resultadoCalculado) || resultadoCalculado === undefined) {
            throw new Error("Expressão inválida");
        }

        document.getElementById('resultado').innerHTML = resultadoCalculado;
    } catch (error) {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}

module.exports = {insert, clean, back, calcular}
