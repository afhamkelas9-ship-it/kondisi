const prompt = require("prompt-sync")({sigint: true});
console.log ('~~nilai terbesar~~');
console.log ('==================');
let angka1 = Number(prompt('masukkan nilai pertama : '));
let angka2 = Number(prompt('mukakan nilai kedua : '));
if (angka1 > angka2) {
    console.log("nilai terbesar adalah: " + angka1);
} else if (angka2 > angka1) {
    console.log("nilai terbesar adalah: " + angka2);
} else {
    console.log("kedua angka sama besar: " + angka1);
}