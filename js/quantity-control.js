const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
let quantityInput = document.getElementById('quantity');
let price = document.getElementById('total-price');

const unitPrice = 500;

arrowUp.addEventListener("click", function() {
    let currentQuantity = parseInt(quantityInput.value);
    
    currentQuantity++;
    
    quantityInput.value = currentQuantity;
    updatePrice(currentQuantity);
});

arrowDown.addEventListener("click", function() {
    let currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;
        updatePrice(currentQuantity);
    };
});

quantityInput.addEventListener("input", function() {
    let currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity < 1 || isNaN(currentQuantity)) {
        currentQuantity = 1;
        quantityInput.value = currentQuantity;
        updatePrice(currentQuantity);
    }
    else {
        updatePrice(currentQuantity);
    };
});

function updatePrice(currentQuantity) {
    let currentPrice = parseInt(price.textContent);

    currentPrice = unitPrice * currentQuantity;
    price.textContent = currentPrice;
}
