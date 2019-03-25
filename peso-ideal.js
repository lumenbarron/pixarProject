function perderPeso () {
  return 10
}

function semanasPesoIdeal (peso, pesoIdeal) {
  let semanas = 0
  while (peso > pesoIdeal) {
    peso = peso - perderPeso()
    semanas += 1
  }
  return semanas
}

console.log(semanasPesoIdeal(100, 80))
