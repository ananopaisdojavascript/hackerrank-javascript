const main = () => {
    let i = 4;
    let d = 4.0;
    let s = "HackerRank ";
    let stringToInteger = parseInt(readLine());
    let stringToDecimal = parseFloat(readLine());;
    let secondString = readLine();

    console.log(stringToInteger + i);
    console.log((stringToDecimal + d).toFixed(1));
    console.log(s + secondString);
}

main();