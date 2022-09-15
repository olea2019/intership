// Given the price of 1 kg of sweets (as a real number), output the cost of 1, 2, …, 10 kg of these sweets

function getRandomvalue(range = 10) {
    return Math.trunc(Math.random() * range);
}

const price: number = getRandomvalue() + 1;
console.log("price = ", price);

for ( let i = 1; i <= 10; i++) {
    let priceOfSeveralKg: number = price * i;
    console.log(`price of ${i} kg =`, priceOfSeveralKg);
}
