var dados = ["line", 'rain', 'animal_migration', 'smiley_face',"grass"];

var dadosPT = ["linha", "chuva", "migração", "rosto sorridente", "grama"];                

//declaração de variáveis


//gera um número aleatório entre 0 e 5

//seleciona um desenho de maneira aleatória

//guarda a tradução em português


//exibe o desenho a se fazer


function preload(){
    //carrega o modelo de classificação
    
}

function setup(){
    canvas = createCanvas(400,400)
    background("white")
    //chama a função classificar ao soltar o mouse
 
}

//cria a função classificar

//cria a função gotResult

function draw(){
    canvas.center();
    
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
    //checa se o desenho do jogador é o desenho aleatório e marca os pontos
    
    //aumenta o tempo

    //mostra o tempo

    //checa se tempo é maior que 400 e atualiza o canvas
   
} 

function attCanvas(){
    background("white"); 
    tempo = 0;
    //gera um número aleatório

    //seleciona um desenho com o índice aleatório

    //pega a tradução em português da lista

    //mostra o desenho aleatório em português

}

function limpar(){
    background("white")
}