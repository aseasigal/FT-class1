'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for ( let i = 0; i < num.length ; i++ ){
    sum += num[num.length -i -1] * 2 ** i  
  }
  return sum
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = 0;
  let resultado = '';
  while (num != 0){
    resto = num % 2;
    num = parseInt(num / 2);
    resultado += resto ;
  }
  resultado = resultado.split('').reverse().join('')
  return resultado
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}