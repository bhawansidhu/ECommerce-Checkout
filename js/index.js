let minusButtonPants = document.getElementById("pantsMinButton");
let plusButtonPants = document.getElementById("pantsAddButton");
let minusButtonShirt = document.getElementById("shirtMinButton");
let plusButtonShirt = document.getElementById("shirtAddButton");
let calcSubTotal = document.getElementById("calculate");
let promoCode = document.getElementById("promo");

let varPantQty = document.getElementById("pantsQty");
let varExtdPricePants = document.getElementById("extdPricePants");
let varShirtQty = document.getElementById("shirtQty");
let varExtdPriceShirt = document.getElementById("extdPriceShirt");
let varSubTotal = document.getElementById("subTotal");
let varTax = document.getElementById("tax");
let varTotalValue = document.getElementById("total");


function increaseValuePants() {
    let qtyAdd = parseInt(varPantQty.innerHTML) + 1;

    varPantQty.innerHTML = qtyAdd;

    let extenddPrice = parseFloat(varExtdPricePants.innerHTML);
    varExtdPricePants.innerHTML = (qtyAdd * 40.99).toFixed(2);

}

function decreaseValuePants() {

    if (varPantQty.innerHTML > 0) {
        let qtyMinus = parseInt(varPantQty.innerHTML) - 1;
        varPantQty.innerHTML = qtyMinus;

    } else {
        varPantQty.innerHTML = 0;
    }
    let extenddPrice = parseFloat(varExtdPricePants.innerHTML);
    varExtdPricePants.innerHTML = (varPantQty.innerHTML * 40.99).toFixed(2);
}



function increaseValueShirt() {
    let qtyAdd = parseInt(varShirtQty.innerHTML) + 1;

    varShirtQty.innerHTML = qtyAdd;

    let extendPrice = parseFloat(varExtdPriceShirt.innerHTML);
    varExtdPriceShirt.innerHTML = (qtyAdd * 10.99).toFixed(2);

}

function decreaseValueShirt() {
    if (varShirtQty.innerHTML > 0) {

        let qtyMinus = parseInt(varShirtQty.innerHTML) - 1;
        varShirtQty.innerHTML = qtyMinus;
    } else {
        varShirtQty.innerHTML = 0;
    }


    let extendPrice = parseFloat(varExtdPriceShirt.innerHTML);
    varExtdPriceShirt.innerHTML = (varShirtQty.innerHTML * 10.99).toFixed(2);

}


function calculate() {
    varSubTotal.innerHTML = (parseFloat(varExtdPricePants.innerHTML) + parseFloat(varExtdPriceShirt.innerHTML)).toFixed(2);
    varTax.innerHTML = (parseFloat(varSubTotal.innerHTML) * 13 / 100).toFixed(2);
    varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);
}

function promo() {

    let promoCode = prompt("Enter promo code! ");
    if (promoCode == "NOTAX") {
        varTax.innerHTML = 0;
        varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);

    } else if (promoCode == "FIFTYFIFTY") {
        varSubTotal.innerHTML = (parseFloat(varSubTotal.innerHTML) * 50 / 100).toFixed(2);
        varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);
    }
}

plusButtonPants.addEventListener("click", increaseValuePants);
minusButtonPants.addEventListener("click", decreaseValuePants);
plusButtonShirt.addEventListener("click", increaseValueShirt);
minusButtonShirt.addEventListener("click", decreaseValueShirt);
calcSubTotal.addEventListener("click", calculate);
promoCode.addEventListener("click", promo);