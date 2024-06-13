// MODAL
let fechar = document.querySelector(".exit")
let modal = document.querySelector(".janelaModal")
let botao = document.querySelector(".botaoModal")


botao.addEventListener('click', () => {
    
    modal.style.display = 'block'
    modal.style.visibility = 'visible'
})

fechar.addEventListener('click', () => {
    modal.style.display = 'none'
})


let fechar2 = document.querySelector("#exit_alien")
let modal2 = document.querySelector("#janelaModal_alien")
let botao2 = document.querySelector("#botaoModal_alien")

botao2.addEventListener('click', () => {
    modal2.style.display = 'block'
    modal2.style.visibility = 'visible'
})

fechar2.addEventListener('click', () => {
    modal2.style.display = 'none'
})


let fechar3 = document.querySelector("#exit_planeta")
let modal3 = document.querySelector("#janelaModal_planeta")
let botao3 = document.querySelector("#botaoModal_planeta")

botao3.addEventListener('click', () => {
    modal3.style.display = 'block'
    modal3.style.visibility = 'visible'
})

fechar3.addEventListener('click', () => {
    modal3.style.display = 'none'
})


let fechar4 = document.querySelector("#exit_gosma")
let modal4 = document.querySelector("#janelaModal_gosma")
let botao4 = document.querySelector("#botaoModal_gosma")

botao4.addEventListener('click', () => {
    modal4.style.display = 'block'
    modal4.style.visibility = 'visible'
})

fechar4.addEventListener('click', () => {
    modal4.style.display = 'none'
})


let fechar5 = document.querySelector('#exit_sniper')
let modal5 = document.querySelector('#janelaModal_sniper')
let botao5 = document.querySelector('#botaoModal_sniper')

botao5.addEventListener('click', () => {
    modal5.style.display = 'block'
    modal5.style.visibility = 'visible'
})

fechar5.addEventListener('click', () => {
    modal5.style.display = 'none'
})


let fechar6 = document.querySelector('#exit_dente')
let modal6 = document.querySelector('#janelaModal_dente')
let botao6 = document.querySelector('#botaoModal_dente')

botao6.addEventListener('click', () => {
    modal6.style.display = 'block'
    modal6.style.visibility = 'visible'
})

fechar6.addEventListener('click', () => {
    modal6.style.display = 'none'
})


let fechar7 = document.querySelector('#exit_porte')
let modal7 = document.querySelector('#janelaModal_porte')
let botao7 = document.querySelector('#botaoModal_porte')

botao7.addEventListener('click', () => {
    modal7.style.display = 'block'
    modal7.style.visibility = 'visible'
})

fechar7.addEventListener('click', () => {
    modal7.style.display = 'none'
})


let fechar8 = document.querySelector('#exit_galaxia')
let modal8 = document.querySelector('#janelaModal_galaxia')
let botao8 = document.querySelector('#botaoModal_galaxia')

botao8.addEventListener('click', () => {
    modal8.style.display = 'block'
    modal8.style.visibility = 'visible'
})

fechar8.addEventListener('click', () => {
    modal8.style.display = 'none'
})

// --------------------------------------------------------

// modal pagamento

function fecharModalPagamentos(){
    const modalPagamentosPix = document.getElementById("containerModalPix")
        modalPagamentosPix.style.display = `none`

        const modalPagamentosCartao = document.getElementById("containerModalCartao")
        modalPagamentosCartao.style.display = `none`
}

function mostrarModalPagamentos(modal){

    if(modal === 1){
        const modalPagamentos = document.getElementById("containerModalPix")
        modalPagamentos.style.display = `flex`
    } else if (modal ===2){
        const modalPagamentos = document.getElementById("containerModalCartao")
        modalPagamentos.style.display = `flex`
    }

}










// let fechar8 = document.getElementsById('.exit')
// let modal8 = document.getElementById('.janelaModal')
// let botao8 = document.getElementById('.botaoModal')

// botao8.addEventListener('click', () => {
//     modal8.style.display = 'block'
//     modal8.style.visibility = 'visible'
// })

// fechar8.addEventListener('click', () => {
//     modal8.style.display = 'none'
// })

// function botaoModal(){
//     let modal = document.querySelector('.janelaModal')

//     modal.style.display = 'block'
// }

// function exit(){
//     let fechar = document.querySelector('.janelaModal')

//     modal.style.display = 'none'
// }


// const fechar = document.getElementById("exit")
// const modal = document.getElementById("modal")
// const botao = document.getElementById("botaoModal")

// botao.addEventListener('click', () => {
//     modal.style.display = 'block'
//     modal.style.visibility = 'visible'
// })

// fechar.addEventListener('click', () => {
//     modal.style.display = 'none'
// })

// const fechar1 = document.getElementById("exit1")
// const modal1 = document.getElementById("modal1")
// const botao1 = document.getElementById("botaoModal1")

// botao1.addEventListener('click', () => {
//     modal1.style.display = 'block'
//     modal1.style.visibility = 'visible'
// })

// fechar1.addEventListener('click', () => {
//     modal1.style.display = 'none'
// })