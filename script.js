// MODAL PRODUTOS
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


// MODAL PAGAMENTO

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


// ---------------------------------------------------------------
// MODAL CARRINHO



function abrirModalProduto(produto) {

    const modal = document.getElementById(produto)
    modal.style.display = `block`

}

function fecharModalProduto(produto) {

    const modal = document.getElementById(produto)
    modal.style.display = `nond`

}

function addCarrinho(item) {

    let itemCarrinho

    switch (item) {
        case 'Pistola':
            itemCarrinho = {
                nome: 'Pistola',
                preco: 5000,
                srcImagem: 'imagens/pistola_laser1-removebg-preview.png'
            }
            break;

        case 'Mini alien':
            itemCarrinho = {
                nome: 'Mini alien',
                preco: 750,
                srcImagem: 'imagens/mini_alien-removebg-preview.png'
            }
            break;

        //...
    }

    let carrinho = JSON.parse(localStorage.getItem('carrinho'))

    let itensCarrinho = []

    if(carrinho === null) {
        console.log("eles")
        itensCarrinho.push({
            itemCarrinho,
            quantidade: 1,
        })
    } else {
        itensCarrinho = carrinho.itensCarrinho
        console.log(itensCarrinho)

        console.log(itensCarrinho.find((itemCarrinhoFind) => itemCarrinhoFind.itemCarrinho.nome === itemCarrinho.nome));

        const verificaSeJaExiste = itensCarrinho.find((itemCarrinhoFind) => itemCarrinhoFind.itemCarrinho.nome === itemCarrinho.nome)
        if (verificaSeJaExiste) {
            
            let indexItem = itensCarrinho.indexOf(verificaSeJaExiste)

            console.log(indexItem)

            console.log(itensCarrinho[indexItem])
            itensCarrinho[indexItem].quantidade++
        } else {
            itensCarrinho.push({
               itemCarrinho,
               quantidade: 1,
            })
        }
    }  
    localStorage.setItem("carrinho", JSON.stringify({
        itensCarrinho
    }))
}

function loadCarrinho() {

    let divCarrinho = document.getElementById("carrinhoContainer")

    const carrinhoJSON = JSON.parse(localStorage.getItem('carrinho'))

    console.log(carrinhoJSON)




    if (!carrinhoJSON) {
        divCarrinho.innerHTML = `
        <h1>Carrinho vazio</h1>
        `
    } else {
        const itensCarrinho = carrinhoJSON.itensCarrinho;

        itensCarrinho.forEach((item) => {

            let divItem = document.createElement('div');

            divItem.innerHTML = `
                <div>
                    <h1>${item.itemCarrinho.nome}</h1>
                    <h2>R$${item.itemCarrinho.preco * item.quantidade}</h2>
                    <h2>${item.quantidade}</h2>
                    <img src='${item.itemCarrinho.srcImagem}'>
                </div>
                
            `
            divCarrinho.appendChild(divItem)
        })
    }
}

loadCarrinho()




// function addCarrinho(item) {

//     console.log('add carrinho');

//     let itemCarrinho

//     switch (item) {
//         case 'Pistola':
//             itemCarrinho = {
//                 nome: 'Pistola',
//                 preco: 5000
//             }
//             break;

//         case 'Mini alien':
//             itemCarrinho = {
//                 nome: 'Mini alien',
//                 preco: 750
//             }
//             break;

//         //...
//     }

//     console.log(itemCarrinho)
//     let carrinho = JSON.parse(localStorage.getItem('carrinho'))

//     let itensCarrinho = []

//     console.log(carrinho)


//     if(carrinho === null) {
//         console.log("eles")
//         itensCarrinho.push({
//             itemCarrinho,
//             quantidade: 1
//         })
//     } else {
//         itensCarrinho = carrinho.itensCarrinho
//         console.log(itensCarrinho)

//         console.log(itensCarrinho.find((itemCarrinhoFind) => itemCarrinhoFind.itemCarrinho.nome === itemCarrinho.nome));

//         const verificaSeJaExiste = itensCarrinho.find((itemCarrinhoFind) => itemCarrinhoFind.itemCarrinho.nome === itemCarrinho.nome)
//         if (verificaSeJaExiste) {
            
//             let indexItem = itensCarrinho.indexOf(verificaSeJaExiste)

//             console.log(indexItem)

//             console.log(itensCarrinho[indexItem])
//             itensCarrinho[indexItem].quantidade++
//         } else {
//             console.log("eles")
//             itensCarrinho.push({
//                itemCarrinho,
//                quantidade: 1
//             })
//         }
//     }  
//     localStorage.setItem("carrinho", JSON.stringify({
//         itensCarrinho
//     }))
// }


