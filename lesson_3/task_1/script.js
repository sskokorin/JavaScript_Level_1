let primeNumbers = [];

for (let i = 0; i <= 100; i++) {
    var isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(i);
    }
}

console.log(primeNumbers.join(", "));