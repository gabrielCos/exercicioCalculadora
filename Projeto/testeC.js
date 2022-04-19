let conjunto = new Array()

//variável usada para que o usuário não possa apagar resultados
apagar = true

//função inserir com parâmetro num para escrever no paragrafo
function inserir(num){
    var painel = document.getElementById("painel").innerHTML
    //restringindo a quantidade de caracteres para que eles não escapem do painel
    if (painel.length <= 20){
          //usando a variável num para armazenar o número digitado
        var numero = document.getElementById('painel').innerHTML
        //usando o num para adicionar o próximo numero digitado invés de apagá-lo
        document.getElementById('painel').innerHTML = numero + num  
    }
}

//limpa o painel e o array
function clean(){
    document.getElementById("painel").innerHTML = ""
    conjunto.length = 0
    apagar = true
}

//limpa o último character do painel
function back(){
    if(apagar == true){
        var painel = document.getElementById("painel").innerHTML
        document.getElementById("painel").innerHTML = painel.substring(0, painel.length -1)
    }
}

//primeiro elemento da operação e qual operação será feita
function calcular(operacao){
    var painel = document.getElementById("painel").innerHTML
    var tamanho = conjunto.length
    if(tamanho <= 2){
        //aqui ele pega o que estiver no painel, transforma em numeral e atribui a primeiro elemento do vetor//
        conjunto[0] = Number(painel)
        //aqui ele pega o character passado como parâmetro da função e atribui ao segundo elemento do vetor
        conjunto[1] = operacao
        //termina a função apagando o painel
        document.getElementById("painel").innerHTML = ""
    }
}

function mostraResultado(){
    var tamanho = conjunto.length
    var operacao = conjunto[1]
    var painel = document.getElementById("painel")
    //verifica se o vetor tem 2 elementos
    if(tamanho == 2){
        //atribui o que está no painel ao terceiro elemento do vetor
        conjunto[2] = Number(painel.innerHTML)
        //de acordo com o character que estiver dentro do segundo elemento do vetor, ele faz a operação desejada//
        switch(operacao){
            case '+':
                painel.innerHTML = `${conjunto[0] + conjunto[2]}`  
                break
            case '-':
                painel.innerHTML = `${conjunto[0] - conjunto[2]}`
                break
            case '*':
            painel.innerHTML = `${conjunto[0] * conjunto[2]}`
                break
            case '/':
                painel.innerHTML = `${conjunto[0] / conjunto[2]}`
                break
        }
        apagar = false
    }
}