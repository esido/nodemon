function evenNumbers(n = 0) {
  if (n > 100) return;
  if (n % 2 === 0) {
    console.log(n);
  }
  evenNumbers(n + 1);
}

evenNumbers();
