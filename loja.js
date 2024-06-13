if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

let valorTotal = "0,00"

function ready() {
  // botao remover produto
  const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
  for (let i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduct)
  }

  // mudança valor 
  const quantityInputs = document.getElementsByClassName("product-qtd-input")
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNull)
  }

  // botao add produto ao carrinho
  const addToCartButtons = document.getElementsByClassName("button-hover-background")
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart)
  }

  // botao comprar
  const purchaseButton = document.getElementsByClassName("purchase-button")[0]
  purchaseButton.addEventListener("click", makePurchase)
}

function removeProduct(event) {
  event.target.parentElement.parentElement.remove()
  updateTotal()
}

function checkIfInputIsNull(event) {
  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove()
  }

  updateTotal()
}

function addProductToCart(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("product-image")[0].src
  const productName = productInfos.getElementsByClassName("product-title")[0].innerText
  const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

  const productsCartNames = document.getElementsByClassName("cart-product-title")
  for (let i = 0; i < productsCartNames.length; i++) {
    if (productsCartNames[i].innerText === productName) {
      productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
      updateTotal()
      return
    }
  }

  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML =
    `
      <td class="product-identification">
        <img src="${productImage}" alt="${productName}" class="cart-product-image">
        <strong class="cart-product-title">${productName}</strong>
      </td>
      <td>
        <span class="cart-product-price">${productPrice}</span>
      </td>
      <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
      </td>
    `
  
  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)
  updateTotal()

  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
}

function makePurchase() {
  if (valorTotal === "0,00") {
    alert("Seu carrinho está vazio!")
  } else {   
    alert(
      `
        Obrigado pela sua compra!
        Valor do pedido: R$${valorTotal}\n
        Volte sempre :)
      `
    )

    document.querySelector(".cart-table tbody").innerHTML = ""
    updateTotal()
  }
}

// atualizar o valor total do carrinho
function updateTotal() {
  const cartProducts = document.getElementsByClassName("cart-product")
  valorTotal = 0

  for (let i = 0; i < cartProducts.length; i++) {
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

    valorTotal += productPrice * productQuantity
  }
  
  valorTotal = valorTotal.toFixed(2)
  valorTotal = valorTotal.replace(".", ",")
  document.querySelector(".cart-total-container span").innerText = "R$" + valorTotal
}