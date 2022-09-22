const vowelsAndConsonants = (s) => {
  const strToArr = Array.from(s);
  const vowels = [];
  const consonants = [];
  for (let i = 0; i < strToArr.length; i++) {
    if (
      strToArr[i] === "a" ||
      strToArr[i] === "e" ||
      strToArr[i] === "i" ||
      strToArr[i] === "o" ||
      strToArr[i] === "u"
    ) {
      vowels.push(strToArr[i]);
    } else {
      consonants.push(strToArr[i]);
    }
  }
  let concatArr = [...vowels, ...consonants];
  for (let i of concatArr) {
    console.log(i);
  }
};

const str = "javascriptloops";

vowelsAndConsonants(str);
