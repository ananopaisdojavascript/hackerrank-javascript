const performOperation = (secondInteger, secondDecimal, secondString) => {
    // Declarar uma variável chamada "firstInteger" e inicializá-la com o valor 4 (valor do tipo inteiro)
    const firstInteger = 4;
    // Declarar uma variável com o primeiro parâmetro (secondInteger) e convertê-lo em um número inteiro
    const stringToInteger = Number(secondInteger);
    // Declarar uma variável chamada "firstDecimal" e inicializá-la com o valor 4.0 (valor do tipo real)
    const firstDecimal = 4.0;
    // Declarar uma variável com o segundo parâmetro (secondDecimal) e convertê-lo em um número real
    const stringToDecimal = Number(secondDecimal);
    // Declarar uma variável chamada "firstString" e inicializá-la com o valor "HackerRank" (valor do tipo string)
    const firstString = 'HackerRank ';
    console.log(stringToInteger + firstInteger);
    console.log(stringToDecimal + firstDecimal);
    console.log(firstString + secondString);
}

performOperation(12, 4.32, "is the best place to learn and practice coding!");