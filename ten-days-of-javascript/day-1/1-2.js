const factorial = (num) => {
    let counter = 1;
    let factorial = 1;
    while (counter <= num) {
        factorial *= counter;
        counter++
    }
    return factorial
}

factorial(4);