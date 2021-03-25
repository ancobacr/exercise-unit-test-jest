let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
};


function fromDollarToYen(valueInDollar){
    var valueInYen = valueInDollar * (oneEuroIs["JPY"]/oneEuroIs["USD"]);
    return valueInYen;
}

function fromYenToPound(valueInYen){
    var valueInPound = valueInYen * (oneEuroIs["GBP"]/oneEuroIs["JPY"]);
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}