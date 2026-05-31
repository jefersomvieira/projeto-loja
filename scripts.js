const prevButton = document.getElementById('anterior')
const nextButton = document.getElementById('proxima')
const item = document.querySelectorAll('.item')
const pontos = document.querySelectorAll('.ponto')
const numberIndicator = document.querySelector('.numero')
const lista = document.querySelector('.lista')
//as variaveis no js de uma maneira resumida const e algo que nao muda o valor ja o let vai ser alterado . nao e apenas essa diferença//
let ativo = 0;
let timer;
const total = item.length

// todas essas variaveis e para separar todos os itens da pagina que vamos usar, sempre comece assim separando e organizando tudo que for usar//

function update(direction) {
    document.querySelector('.item.ativo').classList.remove('ativo')
    document.querySelector('.ponto.ativo').classList.remove('ativo')

    if(direction > 0 ){
        ativo = ativo + 1

        if(ativo === total){
            ativo = 0
        }
    }

    else if(direction < 0 ){
        ativo = ativo-1
        if(ativo < 0){
            ativo = total -1
        }
    }

    item[ativo].classList.add('ativo')
    pontos[ativo].classList.add('ativo')

    numberIndicator.textContent = String(ativo + 1).padStart(2, '0')
}

//essa 'animação' de trocar produtos nada mais e doque uma função automatica //
clearInterval(timer)
timer = setInterval(() => {
    update(1)
},5000 );//a medida e em milisegudos nunca esqueça//
// de uma maneira resumida cada intervalo ele adiciona +1 na função timer e o clearinterval zera a contagem//








prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', function(){
    update(1)
})