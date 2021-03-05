// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 153.48;
    return valueInYen;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen }

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00625;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

