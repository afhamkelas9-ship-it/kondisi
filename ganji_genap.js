const prompt = require("prompt-sync")({sigint: true})

console.log ('ganjil-genap')
console.log('==============')

let kondisi = Number(prompt('angka : '))

if (kondisi % 2 == 1) {
       console.log('ganjil')
} else {
       console.log ('genap')
}
