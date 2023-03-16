//no 1
function cetakFunction(a) {
  return `Hallo Nama Saya ` + a;
}

console.log(cetakFunction("Dava Ryaldi"));

//no 2

function myFunction(a, b) {
  return a + b;
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2);
console.log(output);

// //no 3
let hallo = (a) => {
  console.log(a);
};
hallo("Hello");
// no 4

let obj = {
  nama: "jhon",
  umur: 25,
  bahasa: "indonesia",
};
console.log(obj.bahasa);

//no 5

let daftar = ["jhoni joe", "laki-laki", "baca buku", 2000];
let objdaftar = {
  nama: daftar[0],
  gender: daftar[1],
  hobi: daftar[2],
  tahunKelahiran: daftar[3],
};
console.log(objdaftar);

//no 6
let buah = [
  {
    nama: "nanas",
    warna: "kuning",
    adaBiji: "tidak ada biji",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "orange",
    adaBiji: "ada",
    harga: 6000,
  },
  {
    nama: "semangka",
    warna: "hijau dan merah",
    adaBiji: "ada",
    harga: 10000,
  },
  {
    nama: "pisang",
    warna: "kuning",
    adaBiji: "tidak ada biji",
    harga: 11000,
  },
];

let filterBuah = buah.filter((buah) => buah.adaBiji === "tidak ada biji");
console.log(filterBuah);
