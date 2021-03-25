const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js


    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5);

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
});

test("One dollars should be 127.9 yen", function(){
 
    const yen = fromDollarToYen(3.5)
    const expected = (3.5 * 127.9) / 1.2; 
    expect(expected).toBe(yen);
});

test("One yen should be 0.8 pound", function(){
  
    const pound = fromYenToPound(3.5)
    const expected =  (3.5 * 0.8) / 127.9 ; 
    expect(expected).toBe(pound);
});