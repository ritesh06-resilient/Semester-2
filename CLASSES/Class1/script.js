

const UNIT_PRICE = 500;
const DISCOUNT_THRESHOLD = 10;
const DISCOUNT_RATE = 0.90; 
const TAX_RATE = 1.18;      


function calculateByDeclaration(quantity) {
    let subtotal = quantity * UNIT_PRICE;
    if (quantity >= DISCOUNT_THRESHOLD) {
        subtotal *= DISCOUNT_RATE;
    }
    return subtotal * TAX_RATE;
}

const calculateByExpression = function(quantity) {
    let subtotal = quantity * UNIT_PRICE;
    let afterDiscount = (quantity >= DISCOUNT_THRESHOLD) ? (subtotal * DISCOUNT_RATE) : subtotal;
    return afterDiscount * TAX_RATE;
};


const calculateByArrow = (quantity) => {
    const subtotal = quantity * UNIT_PRICE;
    const discountedPrice = quantity >= 10 ? subtotal * 0.9 : subtotal;
    return discountedPrice * 1.18;
};


const iifeResult = (function(quantity) {
    let subtotal = quantity * UNIT_PRICE;
    if (quantity >= DISCOUNT_THRESHOLD) subtotal *= DISCOUNT_RATE;
    return subtotal * TAX_RATE;
})(12);


const testQty = 12; 

console.log("--- Pricing Module Results ---");
console.log("1. Declaration:  ₹" + calculateByDeclaration(testQty));
console.log("2. Expression:   ₹" + calculateByExpression(testQty));
console.log("3. Arrow:        ₹" + calculateByArrow(testQty));
console.log("4. IIFE Result:  ₹" + iifeResult);