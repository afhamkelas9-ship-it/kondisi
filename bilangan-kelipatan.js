const prompt = require('prompt-sync')({sigint:true})
let bilangan = Number(prompt('masukkan bilangan: '))
if (bilangan % 10 === 0)
    console.log(`${bilangan} adalah kelipatan 10`)
else 
    console.log(`${bilangan} bukan kelipantan 10`)