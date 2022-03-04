//1 ADICIONAR IDS NOS BOTOES **
//1 1...4 **
//2 SELECIONAR OS BOTOES
//3 INTERCEPTAR O EVENTO DE CLIQUE
//4 RECUPERAR O ID ADICIONADO

//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", identificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function identificarOpcoes(event){

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento = event.target

    //VERIFICANDO SE É UM LI
    if(elemento.tagName == "LI"){
        
        //RECUPERANDO O ID    
        const id = elemento.id
        
        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUARIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
        
        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar")
    }
}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")
    }
}