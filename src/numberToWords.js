export function numberToWords (monto) {
  let number = parseInt(monto)
  const unidades = ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve']
  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

  if (number === 0) return 'cero'

  let text = ''

  if (number >= 1000) {
    const miles = Math.floor(number / 1000)
    number %= 1000
    if (miles === 1) {
      text += 'mil '
    } else {
      text += `${numberToWords(miles)} mil `
    }
  }

  if (number >= 100) {
    const cent = Math.floor(number / 100)
    number %= 100
    text += `${centenas[cent]} `
  }

  if (number >= 10 && number < 20) {
    text += `${especiales[number - 10]} `
    number = 0 // Ya hemos procesado el número completo.
  } else {
    if (number >= 20) {
      const dec = Math.floor(number / 10)
      number %= 10
      text += `${decenas[dec]} `
    }

    if (number > 0) {
      text += `${unidades[number]} `
    }
  }
  return text.trim()
}
