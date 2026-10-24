
```javascript
// =====================================
// WEBSITE ALAT-ALAT ELEKTRONIK
// File: script.js
// =====================================

// Daftar produk elektronik
const produkElektronik = [
    {
        id: 1,
        nama: "Laptop",
        kategori: "Komputer",
        harga: 7500000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Laptop",
        deskripsi: "Laptop untuk belajar, bekerja, dan bermain game."
    },
    {
        id: 2,
        nama: "Smartphone",
        kategori: "Handphone",
        harga: 2500000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Smartphone",
        deskripsi: "Smartphone modern untuk kebutuhan sehari-hari."
    },
    {
        id: 3,
        nama: "Headphone",
        kategori: "Aksesoris",
        harga: 250000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Headphone",
        deskripsi: "Headphone nyaman untuk mendengarkan musik."
    },
    {
        id: 4,
        nama: "Keyboard",
        kategori: "Komputer",
        harga: 175000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Keyboard",
        deskripsi: "Keyboard untuk mengetik dan bermain game."
    },
    {
        id: 5,
        nama: "Mouse Wireless",
        kategori: "Aksesoris",
        harga: 125000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Mouse",
        deskripsi: "Mouse tanpa kabel yang praktis digunakan."
    },
    {
        id: 6,
        nama: "Televisi LED",
        kategori: "Elektronik Rumah",
        harga: 2200000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Televisi",
        deskripsi: "Televisi LED untuk hiburan bersama keluarga."
    },
    {
        id: 7,
        nama: "Speaker Bluetooth",
        kategori: "Audio",
        harga: 350000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Speaker",
        deskripsi: "Speaker portabel untuk mendengarkan musik."
    },
    {
        id: 8,
        nama: "Kamera Digital",
        kategori: "Kamera",
        harga: 3500000,
        gambar: "https://placehold.co/300x200/111827/ffffff?text=Kamera",
        deskripsi: "Kamera digital untuk mengambil foto."
    }
];

// Keranjang belanja
let keranjang = [];

// Format harga menjadi Rupiah
function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(harga);
}

// Menampilkan produk
function tampilkanProduk(daftar = produkElektronik) {
    const
