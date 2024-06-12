function abrirModalProduto(produto) {

    const modal = document.getElementById(produto)
    modal.style.display = `block`

}

function fecharModalProduto(produto) {

    const modal = document.getElementById(produto)
    modal.style.display = `nond`

}

function addCarrinho(item, preco) {

    let itemCarrinho

    switch (item) {
        case 'Pistola':
            itemCarrinho = {
                nome: 'Pistola',
                preco: 5000,
                srcImagem: 'imagens/pistola_laser1-removebg-preview.png'
            }
            break;

        case 'miniAlien':
            itemCarrinho = {
                nome: 'Mini alien',
                preco: 750,
                srcImagem: 'imagens/mini_alien-removebg-preview.png'
            }
            break;
        
        case 'pedacoPlaneta':
            itemCarrinho = {
                nome: 'Pedaço de Planeta',
                preco: 100,
                srcImagem: 'imagens/planetas-removebg-preview.png'
            }
            break;
        
        case 'gosmaAlien':
            itemCarrinho = {
                nome: 'Gosma de Alien viva',
                preco: 250,
                srcImagem: 'imagens/gosma_alienigena-removebg-preview.png'
            }
            break;

        case 'sniper':
            itemCarrinho = {
                nome: 'Rifle de Precisão Alienígena',
                preco: 150000,
                srcImagem: 'imagens/Alien_Rifle.webp'
            }
            break;

        case 'Dente de Monstro Alienígena':
            itemCarrinho = {
                nome: 'Dente de Monstro Alienígena',
                preco: 500,
                srcImagem: 'imagens/dente veneno.png'
            }
            break;


        case 'Porte de Arma Alienígena':
            itemCarrinho = {
                nome: 'Porte de Arma Alienígena',
                preco: 100,
                srcImagem: 'imagens/porte arma.png'
            }
            break;


        case 'Viagem para outra galáxia':
            itemCarrinho = {
                nome: 'Viagem para outra galáxia',
                preco: 1000000,
                srcImagem: 'imagens/galaxia-espiral.webp'
            }
            break;

        //...
    }

    console.log(itemCarrinho)

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



// function limparCarrinho(){
//     const limpar = limparCarrinho
//     limpar.addEventListener('click', () => {
//         localStorage.clearItem();
//     })
// }

loadCarrinho()

function limparCarrinho(){
    localStorage.setItem("carrinho", null)
    loadCarrinho()
}