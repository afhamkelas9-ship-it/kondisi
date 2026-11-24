const prompt = require('prompt-sync')({sigint:true})
let suhu =Number(prompt('masukkan suhu zat: '))
if (suhu < 0)
    console.log (`wujud zat padat`)
else if (suhu < 100)
    console.log (`wujud zat adalah cair`)
else
    console.log (`wujud zat adalah gas`)