function validateEuler1(value) {
  let multiples = []
  for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i)
    }
  }
  if (value === multiples.reduce((previous, current) => previous + current)) {
    return true
  } else {
    return false
  }
}

function validateEuler3(value) {
  // Creating an array of factors for num
  let factors = []
  // Max condition uses sqrt(num) to improve runtime
  for (i = 2; i < Math.sqrt(600851475143); i++) {
    if (600851475143 % i === 0) {
      factors.push(i)
    }
  }

  let product = 1
  let primeFactors = []

  // Creates an array for all prime factors
  // Pushes factors to an array until the product of factors is equal to num
  for (i = 0; product < 600851475143; i++) {
    product = product * factors[i]
    primeFactors.push(factors[i])
  }

  if (value === primeFactors.pop()) {
    return true
  } else return false
}

module.exports = { validateEuler3, validateEuler1 }