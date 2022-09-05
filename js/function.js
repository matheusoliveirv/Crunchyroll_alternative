//Função de scroll no header

function blackHeader(){
    if(scrollY <= 80){
        document.querySelector('#header').style.background = 'transparent';
    } else{
        document.querySelector('#header').style.background = '#191919';
    }
};
addEventListener ('scroll', blackHeader);

//Função de listagem dos animes

const scrollList = document.querySelectorAll('.topico');
//LISTA 1
function nextArrow(){
    scrollList[0].scrollTo({
        top: 0,
        left: 1400,
        behavior: "smooth"
    });
}
function beforeArrow(){
    scrollList[0].scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
//LISTA 2
function nextArrow2(){
    scrollList[1].scrollTo({
        top: 0,
        left: 1400,
        behavior: "smooth"
    });
}
function beforeArrow2(){
    scrollList[1].scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
//LISTA 3
function nextArrow3(){
    scrollList[2].scrollTo({
        top: 0,
        left: 1400,
        behavior: "smooth"
    });
}
function beforeArrow3(){
    scrollList[2].scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
//LISTA 4
function nextArrow4(){
    scrollList[3].scrollTo({
        top: 0,
        left: 1400,
        behavior: "smooth"
    });
}
function beforeArrow4(){
    scrollList[3].scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
