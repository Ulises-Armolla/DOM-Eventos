window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', ()=>{
            titulo.style.color = 'green'    
    });

    titulo.addEventListener('mouseout', ()=>{
        titulo.style.color = 'black'    
    });

    
    $input = document.querySelector('#titulo');
    let estadoSecreto = 0;

    $input.addEventListener('keydown', (event)=>{
        switch (true) {
            case event.key == 's' && estadoSecreto == 0:
                estadoSecreto = 1;
                break;

            case event.key == 'e' && estadoSecreto == 1:
                estadoSecreto = 2;
                break;

            case event.key == 'c' && estadoSecreto == 2:
                estadoSecreto = 3;
                break;

            case event.key == 'r' && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
        
            case event.key == 'e' && estadoSecreto == 4:
                estadoSecreto = 5;
                break;

            case event.key == 't' && estadoSecreto == 5:
                estadoSecreto = 6;
                break;

            case event.key == 'o' && estadoSecreto == 6:
                estadoSecreto = 0;
                alert('SECRETO MÁGiCO');
                break;
            default:
                estadoSecreto = 0;
                break;
        }
    });
}