function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = parseFloat(product.querySelector('.price span').innerHTML)
  let quant = parseFloat(product.querySelector('.quantity input').value)

  let subtotal = (quant*price).toFixed(2)
  product.querySelector('.subtotal span').innerHTML = subtotal

  return parseFloat(subtotal)
}

function calculateAll() {
  const total = [...document.querySelectorAll('.product')]
    .map(updateSubtotal)
    .reduce((s, x) => s + x)
    .toFixed(2)
  
  document.querySelector("#total-value span").innerHTML = total
}

let productNames = ["T-Shirt", "Niko-Approved Shorts", "Mug", "Sweater"]
let minPrice = 5, maxPrice = 50

function createProduct(name, price) {
  let template = document.getElementById("productTemplate").innerHTML

  name = name || productNames[Math.floor(Math.random() * productNames.length)]
  
  price = price || (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)

  template = template.replace("{{name}}", "Ironhack " + name).replace("{{price}}", price)

  document.querySelector("#cart tbody").innerHTML += template
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelector("#create").addEventListener("click", x => {
    const name = document.querySelector(".create-product input[type=text]").value
    const price = parseFloat(document.querySelector(".create-product input[type=number]").value)
    createProduct(name, price)
  })
  
  for (let i = 0; i < 5;i++)
    createProduct()
  
  document.querySelectorAll(".product").forEach(x => {
    console.log(x.querySelector(".btn-remove"))
    x.querySelector(".btn-remove").addEventListener("click", x.remove.bind(x))
  })

  calculateAll()
});
