const staircase = (n) => {
	for(let i = 0; i < n; i++) {
    let steps = '#'.repeat(1 * i + 1);
    let spaceBefore = ' '.repeat(n - i - 1);
    console.log(spaceBefore + steps);
	}
}

staircase(4)