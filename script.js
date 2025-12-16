// 1. Menyapa pengguna dengan alert()
// alert("Selamat datang di Snack Kletik-Kletik Mas Zaki!");
// alert("Terima kasih sudah mengunjungi usaha kami");

// 2. Menyimpan nama UMKM dengan const
const namaUmkm = "Snack Kletik-Kletik Mas Zaki";
console.log("Nama UMKM:", namaUmkm);

// 3. Menyimpan jumlah produk awal dengan let
let jumlahProduk = 10;
console.log("Jumlah produk awal:", jumlahProduk);

// 4. Modifikasi jumlah produk dengan operator
// misalnya tambah 5 produk baru
jumlahProduk += 5; // sama seperti: jumlahProduk = jumlahProduk + 5;
console.log("Jumlah produk setelah penambahan :", jumlahProduk);

// 5. Variabel lain, contoh jumlah produk berdasarkan jenis
let jumlahPedas = 8;
let jumlahManis = 4;
let jumlahAsin = 3;

console.log("Jumlah produk rasa pedas :", jumlahPedas);
console.log("Jumlah produk rasa manis :", jumlahManis);
console.log("Jumlah produk rasa asin  :", jumlahAsin);

// Total semua produk berdasarkan jenis
let totalProdukPerJenis = jumlahPedas + jumlahManis + jumlahAsin;
console.log("Total produk dari semua jenis :", totalProdukPerJenis);

// -----------------------------------------------------------------

let rating = 5;
if (rating >= 4.5) {
  document.getElementById("hasil-rating").textContent =
    "★★★★★ Sangat Disarankan";
} else if (rating >= 3) {
  document.getElementById("hasil-rating").textContent = 
    "★★★ Rekomendasi Biasa";
} else {
  document.getElementById("hasil-rating").textContent =
    "★ Tidak Direkomendasikan";
}

let layanan = ["Gratis Ongkir", "Bayar di Tempat", "Garansi 30 Hari"];
layanan.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item;
  document.getElementById("layanan-list").appendChild(li);
});

function cekForm() {
  let nama = document.getElementById("namaProduk").value;
  let jumlah = document.getElementById("jumlah").value;
  if (nama === "" || jumlah === "") {
    alert("Semua kolom wajib diisi.");
    return false;
  }
  if (jumlah <= 0) {
    alert("Jumlah harus lebih dari 0");
    return false;
  }
  alert("Pemesanan berhasil dikirim!");
  return true;
}

//---------------------------------------------------------------------------

// =====================
// 1. Tugas Percabangan: Kategori Usia
// =====================

function tentukanKategoriUsia() {
  let usia = parseInt(document.getElementById("inputUsia").value);
  let statusKategori = "";

  if (isNaN(usia) || usia < 0) {
    statusKategori = "Mohon masukkan usia yang valid.";
  } else if (usia < 13) {
    statusKategori = "Anak-anak";
  } else if (usia <= 17) {
    statusKategori = "Remaja";
  } else if (usia <= 60) {
    statusKategori = "Dewasa";
  } else {
    statusKategori = "Lansia";
  }

  document.getElementById("hasilKategori").textContent =
    "Status Kategori Anda: " + statusKategori;
}

// =====================
// 2. Tugas Perulangan: Testimoni dengan array + forEach()
// =====================

const dataTestimoni = [
  { nama: "Budi Santoso", ulasan: "Rasa snacknya otentik dan bikin nagih!" },
  {
    nama: "Citra Dewi",
    ulasan: "Pesanannya cepat sampai. Kemasan rapi dan higienis.",
  },
  {
    nama: "Denny Firmansyah",
    ulasan: "Harga terjangkau, kualitas terbaik. Sangat direkomendasikan!",
  },
  {
    nama: "Eka Pramita",
    ulasan: "Saya suka varian keripik, renyah tanpa minyak berlebih.",
  },
  {
    nama: "Fauzi Anwar",
    ulasan: "Pelayanan sangat ramah. Akan jadi langganan tetap!",
  },
];

function tampilkanTestimoni() {
  const kontainerTestimoni = document.getElementById("kontainerTestimoni");
  if (!kontainerTestimoni) return; // jaga-jaga kalau dipanggil di halaman lain

  // hapus isi lama kalau ada
  // (kecuali judul, jadi kita simpan dulu h3)
  const judul = kontainerTestimoni.querySelector("h3");
  kontainerTestimoni.innerHTML = "";
  if (judul) kontainerTestimoni.appendChild(judul);

  dataTestimoni.forEach((testimoni) => {
    const divTesti = document.createElement("div");
    divTesti.classList.add("testimoni-card");

    divTesti.innerHTML = `
      <p class="ulasan">"${testimoni.ulasan}"</p>
      <p class="nama-reviewer">— ${testimoni.nama}</p>
    `;

    kontainerTestimoni.appendChild(divTesti);
  });
}

// =====================
// 3. Tugas Fungsi: hitungTotal(harga, jumlah) + form submit
// =====================

// fungsi inti sesuai soal
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

// menjalankan testimoni dan form setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // tampilkan testimoni
  tampilkanTestimoni();

  // tangani form hitung total (kalau ada di halaman)
  const formTotal = document.getElementById("formHitungTotal");
  if (formTotal) {
    formTotal.addEventListener("submit", function (event) {
      event.preventDefault();

      const harga = parseFloat(document.getElementById("inputHarga").value);
      const jumlah = parseInt(document.getElementById("inputJumlah").value);
      const hasilTotalEl = document.getElementById("hasilTotal");

      if (isNaN(harga) || isNaN(jumlah) || harga <= 0 || jumlah <= 0) {
        hasilTotalEl.textContent =
          "Masukkan harga dan jumlah yang benar (lebih dari 0).";
        return;
      }

      const total = hitungTotal(harga, jumlah);
      hasilTotalEl.textContent =
        "Total Belanja Anda: Rp " + total.toLocaleString("id-ID");
    });
  }
});

//-------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  const errorMsg = document.getElementById("errorMsg");
  form.addEventListener("submit", function (e) {
    
    e.preventDefault(); // mencegah reload halaman
    if (nama.value === "" || email.value === "" || pesan.value === "") {
      errorMsg.textContent = "Semua field harus diisi.";
    } else {
      errorMsg.textContent = "";
      alert("Pesan berhasil dikirim!");
      form.reset();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const produkInput = document.getElementById("produkInput");
  const tambahBtn = document.getElementById("tambahBtn");
  const daftarProduk = document.getElementById("daftarProduk");
  const previewProduk = document.getElementById("previewProduk");
  const temaSelect = document.getElementById("temaSelect");

  // Event 1: Tambah Produk ke daftar (click)
  tambahBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const namaProduk = produkInput.value.trim();
    if (namaProduk !== "") {
      const li = document.createElement("li");
      li.textContent = namaProduk;
      // Tambahkan Event Hover (mouseover & mouseout)
      li.addEventListener(
        "mouseover",
        () => (li.style.backgroundColor = "#e0e0e0")
      );
      li.addEventListener("mouseout", () => (li.style.backgroundColor = ""));

      // Tambahkan Event Hapus (dblclick)
      li.addEventListener("dblclick", () => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
          li.remove();
        }
      });
      daftarProduk.appendChild(li);
      produkInput.value = "";
      previewProduk.textContent = "";
    }
  });

  // Event 2: Preview input secara langsung (keyup)
  produkInput.addEventListener("keyup", function () {
    previewProduk.textContent = produkInput.value;
  });
  
  // Event 3: Ubah tema background (change)
  temaSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = temaSelect.value;
  });
});

//-------------------------------------------------------------
// alert("Selamat datang di Website UMKM Snack Kiloan Kletik-Kletik Mas Zaki");

// const namaUmkm = "SNACK KILOAN KLETIK-KLETIK MAS ZAKI";
// console.log("Nama UMKM: ", namaUmkm);

// let produk = 4;
// console.log("Jumlah Produk Saat Ini: ", produk);
// produk += 7;
// console.log("Setelah Penambahan: ", produk);

// const produkPerJenis = {
//   keripik: 12,
//   kacang: 7,
//   kue: 9,
//   minuman: 4,
// };

// //Tugas pertemuan ke 10
// document.addEventListener("DOMContentLoaded", function () {
//   const produkInput = document.getElementById("produkInput");
//   const tambahBtn = document.getElementById("tambahBtn");
//   const daftarProduk = document.getElementById("daftarProduk");
//   const previewProduk = document.getElementById("previewProduk");
//   const temaSelect = document.getElementById("temaSelect");

//   //Event 1: Tambah Produk ke daftar (click)
//   tambahBtn.addEventListener("click", function (e) {
//     e.preventDefault();

//     const namaProduk = produkInput.value.trim();
//     if (namaProduk !== "") {
//       const li = document.createElement("li");
//       li.textContent = namaProduk;

//       //Tambahkan Event Hover (Mouseover & mouseout)
//       li.addEventListener(
//         "mouseover",
//         () => (li.style.backgroundColor = "#FF7F50")
//       );
//       li.addEventListener(
//         "mouseout",
//         () => (li.style.backgroundColor = "#8A2BE2")
//       );

//       //Tambahkan Event Hapus (dblclick)
//       li.addEventListener("dblclick", () => {
//         if (confirm("Yakin ingin menghapus produk ini?")) {
//           li.remove();
//         }
//       });

//       daftarProduk.appendChild(li);
//       produkInput.value = "";
//       previewProduk.textContent = "";
//     }
//   });

//   //Event 2: Preview input secara langsung (keyup)
//   produkInput.addEventListener("keyup", function () {
//     previewProduk.textContent = produkInput.value;
//   });

//   //Event 3: Ubah tema background (change)
//   temaSelect.addEventListener("change", function () {
//     document.body.style.backgroundColor = temaSelect.value;
//   });
// });

// console.log("Jumlah produk per jenis:", produkPerJenis);
// console.table(produkPerJenis);

// // tampilkan per jenis secara terpisah
// for (const [jenis, jumlah] of Object.entries(produkPerJenis)) {
//   console.log(`Jenis: ${jenis} — Jumlah: ${jumlah}`);
// }

// // total semua produk dari objek produkPerJenis
// const totalProdukPerJenis = Object.values(produkPerJenis).reduce(
//   (a, b) => a + b,
//   0
// );
// console.log("Total produk (semua jenis):", totalProdukPerJenis);

// /**
//  * Fungsi untuk mengambil usia dari input dan menentukan kategorinya
//  * berdasarkan kriteria soal.
//  */
// function tentukanKategoriUsia() {
//   // 1. Ambil nilai input usia dari elemen HTML
//   // Perintah 'parseInt' mengubah teks input menjadi bilangan bulat (integer)
//   let usia = parseInt(document.getElementById("inputUsia").value);
//   let statusKategori = "";

//   // 2. Terapkan logika Percabangan (if...else if...else)

//   // Tambahan: Validasi input dasar
//   if (isNaN(usia) || usia < 0) {
//     statusKategori = "Mohon masukkan usia yang valid (berupa angka positif).";
//   }
//   // Kategori: Anak-anak (Usia < 13)
//   else if (usia < 13) {
//     statusKategori = "Anak-anak";
//   }
//   // Kategori: Remaja (Usia 13-17)
//   // Karena if sebelumnya sudah menyaring < 13, kita hanya perlu cek <= 17
//   else if (usia <= 17) {
//     statusKategori = "Remaja";
//   }
//   // Kategori: Dewasa (Usia 18-60)
//   else if (usia <= 60) {
//     statusKategori = "Dewasa";
//   }
//   // Kategori: Lansia (Usia > 60)
//   else {
//     statusKategori = "Lansia";
//   }

//   // 3. Tampilkan hasil di elemen HTML
//   document.getElementById(
//     "hasilKategori"
//   ).textContent = `Status Kategori Anda: ${statusKategori}`;
// }

// // 1. Definisikan Array berisi 5 Testimoni (Array of Objects)
// const dataTestimoni = [
//   { nama: "Budi Santoso", ulasan: "Rasa snacknya otentik dan bikin nagih!" },
//   {
//     nama: "Citra Dewi",
//     ulasan: "Pesanannya cepat sampai. Kemasan rapi dan higienis.",
//   },
//   {
//     nama: "Denny Firmansyah",
//     ulasan: "Harga terjangkau, kualitas terbaik. Sangat direkomendasikan!",
//   },
//   {
//     nama: "Eka Pramita",
//     ulasan: "Saya suka varian keripik, renyah tanpa minyak berlebih.",
//   },
//   {
//     nama: "Fauzi Anwar",
//     ulasan: "Pelayanan sangat ramah. Akan jadi langganan tetap!",
//   },
// ];

// /**
//  * Fungsi untuk menampilkan semua testimoni secara dinamis.
//  */
// function tampilkanTestimoni() {
//   const kontainerTestimoni = document.getElementById("kontainerTestimoni");
//   // Bersihkan kontainer jika sudah ada isinya (untuk menghindari duplikasi)
//   kontainerTestimoni.innerHTML = "";

//   // 2. Lakukan Perulangan menggunakan forEach()
//   dataTestimoni.forEach((testimoni, index) => {
//     // a. Buat elemen <div> baru untuk setiap testimoni
//     const divTesti = document.createElement("div");
//     divTesti.classList.add("testimoni-card"); // Tambahkan class untuk styling

//     // b. Isi konten HTML-nya
//     // Menggunakan 'template literal' (backtick ``) untuk memudahkan format multi-baris
//     divTesti.innerHTML = `
//             <p class="ulasan">"${testimoni.ulasan}"</p>
//             <p class="nama-reviewer">— ${testimoni.nama}</p>
//         `;

//     // c. Masukkan (append) elemen baru ke dalam kontainer di HTML
//     kontainerTestimoni.appendChild(divTesti);
//   });
// }

// // Panggil fungsi saat dokumen selesai dimuat agar testimoni langsung muncul
// window.onload = tampilkanTestimoni;

// /**
//  * 1. Fungsi Inti: hitungTotal(harga, jumlah) - sesuai permintaan soal
//  * (Fungsi ini hanya berisi logika perhitungan)
//  */
// function hitungTotalInti(harga, jumlah) {
//   // Penjelasan: Fungsi mengalikan dua parameter dan mengembalikan hasilnya
//   return harga * jumlah;
// }

// /**
//  * 2. Fungsi Event Handler: Menangani submit form dan menampilkan hasil
//  * (Fungsi ini berinteraksi dengan DOM)
//  */
// function handleHitungTotal(event) {
//   // Mencegah halaman reload ketika form disubmit (perilaku bawaan form)
//   event.preventDefault();

//   // Ambil nilai dari input form
//   let hargaInput = document.getElementById("inputHarga").value;
//   let jumlahInput = document.getElementById("inputJumlah").value;

//   // Konversi nilai input menjadi tipe data yang sesuai
//   let harga = parseFloat(hargaInput);
//   let jumlah = parseInt(jumlahInput);

//   let hasilTotal = document.getElementById("hasilTotal");

//   // Validasi angka
//   if (isNaN(harga) || isNaN(jumlah) || harga < 0 || jumlah < 0) {
//     hasilTotal.textContent =
//       "Harap masukkan nilai harga dan jumlah yang benar (angka).";
//     return; // Hentikan eksekusi
//   }

//   // Panggil fungsi inti untuk mendapatkan total
//   let total = hitungTotalInti(harga, jumlah);

//   // Tampilkan hasil dengan format mata uang Rupiah
//   hasilTotal.textContent =
//     "Total Belanja Anda: Rp " + total.toLocaleString("id-ID");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("formKontak");
//   const nama = document.getElementById("nama");
//   const email = document.getElementById("email");
//   const noHP = document.getElementById("noHP");
//   const pesan = document.getElementById("pesan");
//   const errorMsg = document.getElementById("errorMsg");
//   const successMsg = document.getElementById("successMsg");
//   const clearBtn = document.getElementById("clearBtn");

//   // Validasi form
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     errorMsg.textContent = "";
//     successMsg.textContent = "";

//     // Validasi nomor HP (hanya angka)
//     if (!/^[0-9]+$/.test(noHP.value)) {
//       errorMsg.textContent = "Nomor HP harus berisi angka saja.";
//       noHP.focus();
//       return;
//     }

//     if (
//       nama.value === "" ||
//       email.value === "" ||
//       noHP.value === "" ||
//       pesan.value === ""
//     ) {
//       errorMsg.textContent = "Semua field harus diisi.";
//     } else {
//       // Tampilkan pesan sukses
//       successMsg.textContent =
//         "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.";

//       // Reset form
//       form.reset();
//     }
//   });

//   // Tombol clear data
//   clearBtn.addEventListener("click", function () {
//     form.reset();
//     errorMsg.textContent = "";
//     successMsg.textContent = "";
//   });
// });

// const form = document.getElementById("formKontak");

// form.addEventListener("submit", function (event) {
//   let valid = true;

//   //Nama harus diisi
//   const nama = document.getElementById("nama");
//   const errorNama = document.getElementById("errorNama");
//   if (nama.value.trim() === "") {
//     errorNama.textContent = "Nama wajib diisi.";
//     valid = false;
//   } else {
//     errorNama.textContent = "";
//   }

//   //Email harus valid dan domain @gmail.com
//   const email = document.getElementById("email");
//   const errorEmail = document.getElementById("errorEmail");
//   const emailPattern = /^[^ ]+@gmail\.com$/i;
//   if (!emailPattern.test(email.value)) {
//     errorEmail.textContent = "Email harus @gmail.com dan format benar.";
//     valid = false;
//   } else {
//     errorEmail.textContent = "";
//   }

//   //Kategori harus dipilih
//   const kategori = document.getElementById("kategori");
//   const errorKategori = document.getElementById("errorKategori");
//   if (kategori.value === "") {
//     errorKategori.textContent = "Pilih salah satu kategori.";
//     valid = false;
//   } else {
//     errorKategori.textContent = "";
//   }

//   //Pesan minimal 10 karakter
//   const pesan = document.getElementById("pesan");
//   const errorPesan = document.getElementById("errorPesan");
//   if (pesan.value.trim().length < 10) {
//     errorPesan.textContent = "Pesan minimal 10 karakter.";
//     valid = false;
//   } else {
//     errorPesan.textContent = "";
//   }

//   if (!valid) {
//     event.preventDefault(); //Gagalkan submit
//   } else {
//     alert("Pesan berhasil dikirim!");
//     form.reset();
//   }
// });

// document.getElementById("nama").addEventListener("blur", function () {
//   const errorNama = document.getElementById("errorNama");
//   if (this.value.trim() === "") {
//     errorNama.textContent = "Nama wajib diisi.";
//   } else {
//     errorNama.textContent = "";
//   }
// });

// document.getElementById("pesan").addEventListener("input", function () {
//   const errorPesan = document.getElementById("errorPesan");
//   if (this.value.trim().length < 10) {
//     errorPesan.textContent = "Pesan minimal 10 karakter.";
//   } else {
//     errorPesan.textContent = "";
//   }
// });

// document.getElementById("langganan").addEventListener("change", function () {
//   if (this.checked) {
//     alert("Terima kasih telah berlangganan newsletter!");
//   }
// });
