function calculateKg(type, weight, pricePerkg) {
    
    let weightInKg = (weight/1000).toFixed(2);
    let money = (weightInKg*pricePerkg).toFixed(2);
    
    console.log(`I need $${money} to buy ${weightInKg} kilograms ${type}.`)
}

 calculateKg('apple', 1563, 2.35);