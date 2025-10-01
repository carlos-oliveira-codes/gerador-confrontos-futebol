
var Times = [];

function CadastraTimes(){
    //referenciando elementos
    var inTime = document.getElementById("inTime");
    var outListaTimes = document.getElementById("outListaTimes");
    var outTitulo = document.getElementById("titulo-times");
    var DivTimes = document.querySelector(".times");

    //pegando nome do time
    var time = inTime.value.toUpperCase();

    if (time.trim() === "" || !isNaN(time)){
        outListaTimes.style.color = "red";
        outListaTimes.textContent = "Preencha corretamente!";
        return;
    }

    //adicionando o time no vetor Times
    Times.push(time);

    //Criando uma string para formatar a lista do vetor
    var Lista = "";

    //Percorrendo vetor e adicionando valores formatados na string
    for (var i = 0; i < Times.length; i++){
        Lista += `${i+1}. ${Times[i]} \n`;
    }

    //adicionando a lista formatada da string no elemento de saída no html
    outListaTimes.textContent = Lista;
    outTitulo.textContent = "Times: \n";

    if (Lista.trim() !== ""){
        DivTimes.style.border = "2px solid rgba(7, 153, 44, 0.6)";
    }

    inTime.value = "";
    inTime.focus();
}

//Criando botao que executa a função quando clicado
var btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", CadastraTimes);

//Criando função que gera os confrontos de maneira aleatória 

function GeraConfrontos(){

    var outConfrontos = document.getElementById("outConfrontos");
    var outTitulo = document.getElementById("titulo-confrontos");
    var divTabela = document.querySelector(".tabela");

    if (Times.length < 4){
        outConfrontos.textContent = "Informe no mínimo 4 times para gerar o confronto";
        return;
    }
    if((Times.length % 2) !== 0){
        outConfrontos.textContent = "Informe mais um time!";
        return;
    }

    for (var i = Times.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        [Times[i], Times[j]] = [Times[j], Times[i]];
    }

    var Confronto = "";
    for (var i = 0; i < Times.length; i++){
        Confronto += `${Times[i]} X ${Times[i+1]} \n`;
        i++;
    }

    outTitulo.textContent = "CONFRONTOS: ";
    outConfrontos.textContent = Confronto;

    if(Confronto.trim() !== ""){
        divTabela.style.border = "2px solid rgba(7, 153, 44, 0.6)";
    }

}

//Criando botão para ativar função confrontos
var btGerarConfrontos = document.getElementById("btGerar");
btGerarConfrontos.addEventListener("click", GeraConfrontos);

