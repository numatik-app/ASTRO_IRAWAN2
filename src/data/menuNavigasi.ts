/**
 * Data navigasi GAME QUIZ - daftar topik dan route untuk /quiz-gamez
 * Route mengarah ke /quiz-gamez/:topic/:subtopic (QuizGamezContentPage)
 * Edit quizGamezData.ts untuk mengubah soal
 */

// =============================================
// QUIZ GAMEZ — daftar topik dan route untuk /quiz-gamez
// =============================================
export const quizGamezTopics: Record<string, { label: string; route: string }[]> = {
  "KELAS 7": [
    { label: "BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/penjumlahan" },
    { label: "BILANGAN RASIONAL", route: "/quiz-gamez/bilangan-rasional/penjumlahan" },
    { label: "ALJABAR", route: "/quiz-gamez/aljabar/penjumlahan" },
    { label: "PERSAMAAN DAN PERTIDAKSAMAAN SATU VARIABEL", route: "/quiz-gamez/persamaan/penjumlahan" },
    { label: "PERBANDINGAN", route: "/quiz-gamez/perbandingan/penjumlahan" },
    { label: "ARITMETIKA SOSIAL", route: "/quiz-gamez/aritmetika-sosial/penjumlahan" },
    { label: "GARIS DAN SUDUT", route: "/quiz-gamez/garis-dan-sudut/penjumlahan" },
    { label: "SEGITIGA DAN SEGIEMPAT", route: "/quiz-gamez/segitiga-dan-segiempat/penjumlahan" },
    { label: "HIMPUNAN", route: "/quiz-gamez/himpunan/penjumlahan" },
  ],
  "KELAS 8": [
    { label: "POLA BILANGAN", route: "/quiz-gamez/pola-bilangan/penjumlahan" },
    { label: "KOORDINAT CARTECIUS", route: "/quiz-gamez/koordinat-cartesius/penjumlahan" },
    { label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV)", route: "/quiz-gamez/spldv/penjumlahan" },
    { label: "RELASI DAN FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/penjumlahan" },
    { label: "TEOREMA PYTHAGORAS", route: "/quiz-gamez/teorema-pythagoras/penjumlahan" },
    { label: "LINGKARAN", route: "/quiz-gamez/lingkaran/penjumlahan" },
    { label: "PERSAMAAN GARIS LURUS", route: "/quiz-gamez/persamaan-garis-lurus/penjumlahan" },
    { label: "BANGUN RUANG SISI DATAR", route: "/quiz-gamez/bangun-ruang-sisi-datar" },
  ],
  "KELAS 9": [
    { label: "BILANGAN BERPANGKAT", route: "/quiz-gamez/bilangan-berpangkat/penjumlahan" },
    { label: "KESEBANGUNAN DAN KEKONGRUENAN", route: "/quiz-gamez/kesebangunan/penjumlahan" },
    { label: "TRANSFORMASI GEOMETRI", route: "/quiz-gamez/transformasi-geometri/penjumlahan" },
    { label: "BANGUN RUANG SISI LENGKUNG", route: "/quiz-gamez/bangun-ruang-sisi-lengkung/penjumlahan" },
    { label: "STATISTIKA", route: "/quiz-gamez/statistika/penjumlahan" },
    { label: "PELUANG", route: "/quiz-gamez/peluang/penjumlahan" },
  ],
};

// =============================================
// LATIHAN — daftar topik dan route untuk /latihan
// =============================================
export const latihanTopics: Record<string, { label: string; route: string }[]> = {
  "KELAS 7": [
    { label: "BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/penjumlahan" },
    { label: "BILANGAN RASIONAL", route: "/quiz-gamez/bilangan-rasional/penjumlahan" },
    { label: "ALJABAR", route: "/quiz-gamez/aljabar/penjumlahan" },
    { label: "PERSAMAAN DAN PERTIDAKSAMAAN SATU VARIABEL", route: "/quiz-gamez/persamaan/penjumlahan" },
    { label: "PERBANDINGAN", route: "/quiz-gamez/perbandingan/penjumlahan" },
    { label: "ARITMETIKA SOSIAL", route: "/quiz-gamez/aritmetika-sosial/penjumlahan" },
    { label: "GARIS DAN SUDUT", route: "/quiz-gamez/garis-dan-sudut/penjumlahan" },
    { label: "SEGITIGA DAN SEGIEMPAT", route: "/quiz-gamez/segitiga-dan-segiempat/penjumlahan" },
    { label: "HIMPUNAN", route: "/quiz-gamez/himpunan/penjumlahan" },
  ],
  "KELAS 8": [
    { label: "POLA BILANGAN", route: "/quiz-gamez/pola-bilangan/penjumlahan" },
    { label: "KOORDINAT CARTECIUS", route: "/quiz-gamez/koordinat-cartesius/penjumlahan" },
    { label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV)", route: "/quiz-gamez/spldv/penjumlahan" },
    { label: "RELASI DAN FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/penjumlahan" },
    { label: "TEOREMA PYTHAGORAS", route: "/quiz-gamez/teorema-pythagoras/penjumlahan" },
    { label: "LINGKARAN", route: "/quiz-gamez/lingkaran/penjumlahan" },
    { label: "PERSAMAAN GARIS LURUS", route: "/quiz-gamez/persamaan-garis-lurus/penjumlahan" },
    { label: "BANGUN RUANG SISI DATAR", route: "/quiz-gamez/bangun-ruang-sisi-datar" },
  ],
  "KELAS 9": [
    { label: "BILANGAN BERPANGKAT", route: "/quiz-gamez/bilangan-berpangkat/penjumlahan" },
    { label: "KESEBANGUNAN DAN KEKONGRUENAN", route: "/quiz-gamez/kesebangunan/penjumlahan" },
    { label: "TRANSFORMASI GEOMETRI", route: "/quiz-gamez/transformasi-geometri/penjumlahan" },
    { label: "BANGUN RUANG SISI LENGKUNG", route: "/quiz-gamez/bangun-ruang-sisi-lengkung/penjumlahan" },
    { label: "STATISTIKA", route: "/quiz-gamez/statistika/penjumlahan" },
    { label: "PELUANG", route: "/quiz-gamez/peluang/penjumlahan" },
  ],
};

// =============================================
// MATERI — daftar topik dan subtopik untuk /materi
// =============================================
export const materiTopics: Record<string, { label: string; subtopics: { label: string; route: string }[] }[]> = {
  "KELAS 7": [
    {
      label: "BILANGAN BULAT",
      subtopics: [
        { label: "PENJUMLAHAN BILANGAN BULAT", route: "/materi/bilangan-bulat/penjumlahan" },
        { label: "PENGURANGAN BILANGAN BULAT", route: "/materi/bilangan-bulat/pengurangan" },
        { label: "PERKALIAN BILANGAN BULAT", route: "/materi/bilangan-bulat/perkalian" },
        { label: "PEMBAGIAN BILANGAN BULAT", route: "/materi/bilangan-bulat/pembagian" },
        { label: "OPERASI HITUNG CAMPURAN BILANGAN BULAT", route: "/materi/bilangan-bulat/campuran" },
        { label: "KPK DAN FPB", route: "/materi/bilangan-bulat/kpk-fpb" },
      ],
    },
    {
      label: "BILANGAN RASIONAL",
      subtopics: [
        { label: "ARTI PECAHAN, PECAHAN SENILAI DAN MEMBANDINGKAN PECAHAN", route: "/materi/bilangan-rasional/arti-pecahan" },
        { label: "PECAHAN CAMPURAN DAN PERSEN", route: "/materi/bilangan-rasional/pecahan-campuran" },
        { label: "PENJUMLAHAN PECAHAN", route: "/materi/bilangan-rasional/penjumlahan" },
        { label: "PENGURANGAN PECAHAN", route: "/materi/bilangan-rasional/pengurangan" },
        { label: "PERKALIAN PECAHAN", route: "/materi/bilangan-rasional/perkalian" },
        { label: "PEMBAGIAN PECAHAN", route: "/materi/bilangan-rasional/pembagian" },
        { label: "BENTUK DESIMAL", route: "/materi/bilangan-rasional/bentuk-desimal" },
        { label: "PENJUMLAHAN BENTUK DESIMAL", route: "/materi/bilangan-rasional/penjumlahan-desimal" },
        { label: "PENGURANGAN BENTUK DESIMAL", route: "/materi/bilangan-rasional/pengurangan-desimal" },
        { label: "PERKALIAN BENTUK DESIMAL", route: "/materi/bilangan-rasional/perkalian-desimal" },
        { label: "PEMBAGIAN BENTUK DESIMAL", route: "/materi/bilangan-rasional/pembagian-desimal" },
        { label: "PEMBULATAN BENTUK DESIMAL", route: "/materi/bilangan-rasional/pembulatan-desimal" },
      ],
    },
    {
      label: "ALJABAR",
      subtopics: [
        { label: "PENGERTIAN DAN UNSUR-UNSUR BENTUK ALJABAR", route: "/materi/aljabar/pengertian" },
        { label: "PENJUMLAHAN DAN PENGURANGAN BENTUK ALJABAR", route: "/materi/aljabar/penjumlahan-pengurangan" },
        { label: "PERKALIAN BENTUK ALJABAR", route: "/materi/aljabar/perkalian" },
        { label: "PEMBAGIAN BENTUK ALJABAR", route: "/materi/aljabar/pembagian" },
        { label: "PEMANGKATAN BENTUK ALJABAR", route: "/materi/aljabar/pemangkatan" },
        { label: "SUBSTITUSI BILANGAN PADA BENTUK ALJABAR", route: "/materi/aljabar/substitusi" },
        { label: "FAKTORISASI BENTUK ALJABAR", route: "/materi/aljabar/faktorisasi" },
        { label: "OPERASI PECAHAN BENTUK ALJABAR", route: "/materi/aljabar/pecahan" },
      ],
    },
    {
      label: "PERSAMAAN DAN PERTIDAKSAMAAN LINEAR SATU VARIABEL",
      subtopics: [
        { label: "KALIMAT TERBUKA DAN TERTUTUP (PERNYATAAN)", route: "/materi/plsv/kalimat" },
        { label: "PENGERTIAN PLSV, KESAMAAN, DAN PERNYATAAAN EKUIVALEN", route: "/materi/plsv/pengertian" },
        { label: "PENYELESAIAN PERSAMAAN LINEAR SATU VARIABEL", route: "/materi/plsv/penyelesaian" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERSAMAAN PADA SOAL CERITA", route: "/materi/plsv/penerapan" },
        { label: "PENGERTIAN KETIDAKSAMAAN, PERTIDAKSAMAAN DAN PtLSV", route: "/materi/plsv/pengertian-ptlsv" },
        { label: "PENYELESAIAN PERTIDAKSAMAAN LINEAR SATU VARIABEL", route: "/materi/plsv/penyelesaian-ptlsv" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERTIDAKSAMAAN PADA SOAL CERITA", route: "/materi/plsv/penerapan-ptlsv" },
      ],
    },
    {
      label: "PERBANDINGAN",
      subtopics: [
        { label: "PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO", route: "/materi/perbandingan/rasio" },
        { label: "PERBANDINGAN SENILAI DAN BERBALIK NILAI", route: "/materi/perbandingan/senilai-berbalik" },
        { label: "PERBANDINGAN CAMPURAN", route: "/materi/perbandingan/campuran" },
        { label: "SKALA", route: "/materi/perbandingan/skala" },
      ],
    },
    {
      label: "ARITMETIKA SOSIAL",
      subtopics: [
        { label: "JUAL BELI, UNTUNG DAN RUGI", route: "/materi/aritmetika-sosial/jual-beli" },
        { label: "DISKON", route: "/materi/aritmetika-sosial/diskon" },
        { label: "BRUTO, NETTO DAN TARA", route: "/materi/aritmetika-sosial/bruto-netto-tara" },
        { label: "BUNGA TUNGGAL", route: "/materi/aritmetika-sosial/bunga-tunggal" },
        { label: "PAJAK PERTAMBAHAN NILAI (PPN)", route: "/materi/aritmetika-sosial/ppn" },
        { label: "PAJAK PENGHASILAN (PPH)", route: "/materi/aritmetika-sosial/pph" },
      ],
    },
    {
      label: "GARIS DAN SUDUT",
      subtopics: [
        { label: "HUBUNGAN 2 GARIS", route: "/materi/garis-dan-sudut/hubungan-garis" },
        { label: "SUDUT PELURUS, SUDUT PENYIKUT DAN SUDUT BERTOLAK BELAKANG", route: "/materi/garis-dan-sudut/hubungan-sudut" },
        { label: "SIFAT SUDUT DUA GARIS SEJAJAR JIKA DIPOTONG GARIS LAIN", route: "/materi/garis-dan-sudut/sudut-sejejar" },
        { label: "JUMLAH SUDUT PADA SEGI BANYAK", route: "/materi/garis-dan-sudut/segi-banyak" },
      ],
    },
    {
      label: "SEGITIGA DAN SEGIEMPAT",
      subtopics: [
        { label: "GARIS BERAT, GARIS BAGI DAN GARIS TINGGI PADA SEGITIGA", route: "/materi/segitiga-dan-segiempat/garis-segitiga" },
        { label: "SEGITIGA (KELILING)", route: "/materi/segitiga-dan-segiempat/keliling-segitiga" },
        { label: "SEGITIGA (LUAS)", route: "/materi/segitiga-dan-segiempat/luas-segitiga" },
        { label: "SEGIEMPAT (KELILING)", route: "/materi/segitiga-dan-segiempat/keliling-segiempat" },
        { label: "SEGIEMPAT (LUAS)", route: "/materi/segitiga-dan-segiempat/luas-segiempat" },
      ],
    },
    {
      label: "HIMPUNAN",
      subtopics: [
        { label: "PENGERTIAN DAN KEANGGOTAAAN SUATU HIMPUNAN", route: "/materi/himpunan/pengertian" },
        { label: "MENYATAKAN SUATU HIMPUNAN, HIMPUNAN KOSONG DAN HIMPUNAN SEMESTA", route: "/materi/himpunan/menyatakan" },
        { label: "DIAGRAM VENN", route: "/materi/himpunan/diagram-venn" },
        { label: "HIMPUNAN BAGIAN", route: "/materi/himpunan/bagian" },
        { label: "OPERASI HIMPUNAN", route: "/materi/himpunan/operasi" },
      ],
    },
  ],
  "KELAS 8": [
    {
      label: "POLA BILANGAN",
      subtopics: [
        { label: "PENGERTIAN POLA DAN BARISAN BILANGAN", route: "/materi/pola-bilangan/pengertian" },
        { label: "POLA-POLA KHUSUS", route: "/materi/pola-bilangan/pola-khusus" },
        { label: "POLA ARITMETIKA", route: "/materi/pola-bilangan/pola-aritmetika" },
        { label: "POLA GEOMETRI", route: "/materi/pola-bilangan/pola-geometri" },
      ],
    },
    {
      label: "KOORDINAT CARTECIUS",
      subtopics: [
        { label: "UNSUR-UNSUR PADA DIAGRAM CARTECIUS", route: "/materi/koordinat-cartesius/unsur" },
        { label: "JARAK ANTAR DUA TITIK DAN JARAK TITIK KE GARIS", route: "/materi/koordinat-cartesius/jarak" },
        { label: "POSISI RELATIF SUATU TITIK TERHADAP SUATU GARIS", route: "/materi/koordinat-cartesius/posisi" },
      ],
    },
    {
      label: "RELASI DAN FUNGSI",
      subtopics: [
        { label: "PENGERTIAN RELASI DAN PENYAJIANNYA", route: "/materi/relasi-dan-fungsi/pengertian-relasi" },
        { label: "PENGERTIAN FUNGSI DAN PENYAJIANNYA", route: "/materi/relasi-dan-fungsi/pengertian-fungsi" },
        { label: "MENENTUKAN BANYAK FUNGSI DAN KORESPONDENSI SATU-SATU", route: "/materi/relasi-dan-fungsi/banyak-fungsi" },
        { label: "NOTASI DAN RUMUS FUNGSI", route: "/materi/relasi-dan-fungsi/notasi-rumus" },
        { label: "GRAFIK FUNGSI", route: "/materi/relasi-dan-fungsi/grafik" },
      ],
    },
    {
      label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL",
      subtopics: [
        { label: "DEFINISI DAN BENTUK UMUM SPLDV BESERTA KAITANNYA DENGAN PLDV", route: "/materi/spldv/definisi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE GRAFIK", route: "/materi/spldv/grafik" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE SUBSTITUSI", route: "/materi/spldv/substitusi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE ELIMINASI", route: "/materi/spldv/eliminasi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE CAMPURAN", route: "/materi/spldv/campuran" },
        { label: "MEMBUAT MODEL DARI PERMASALAHAN YANG BERKAITAN DENGAN SPLDV", route: "/materi/spldv/model" },
        { label: "PENYELESAIAN MASALAH YANG BERKAITAN DENGAN SPLDV", route: "/materi/spldv/penyelesaian" },
      ],
    },
    {
      label: "PERSAMAAN GARIS LURUS",
      subtopics: [
        { label: "GRAFIK PERSAMAAN GARIS LURUS", route: "/materi/pgl/grafik" },
        { label: "GRADIEN (KEMIRINGAN GARIS)", route: "/materi/pgl/gradien" },
        { label: "MENENTUKAN PERSAMAAN GARIS LURUS", route: "/materi/pgl/persamaan" },
        { label: "HUBUNGAN 2 GARIS", route: "/materi/pgl/hubungan-garis" },
        { label: "APLIKASI PERSAMAAN GARIS PADA SOAL KONTEKSTUAL", route: "/materi/pgl/aplikasi" },
      ],
    },
    {
      label: "TEOREMA PYTHAGORAS",
      subtopics: [
        { label: "PEMBUKTIAN TEOREMA PYTHAGORAS", route: "/materi/pythagoras/pembuktian" },
        { label: "MENGHITUNG PANJANG SEGITIGA SIKU-SIKU", route: "/materi/pythagoras/hitung-panjang" },
        { label: "TRIPLE PYTHAGORAS", route: "/materi/pythagoras/triple" },
        { label: "PYHTAGORAS DAN JENIS-JENIS SEGITIGA", route: "/materi/pythagoras/jenis-segitiga" },
        { label: "PERBANDINGAN SISI SEGITIGA SIKU-SIKU SUDUT KHUSUS", route: "/materi/pythagoras/perbandingan-sisi" },
        { label: "PENERAPAN TEOREMA PYTHAGORAS PADA MASALAH KONTEKSTUAL", route: "/materi/pythagoras/penerapan" },
      ],
    },
    {
      label: "LINGKARAN",
      subtopics: [
        { label: "UNSUR-UNSUR LINGKARAN", route: "/materi/lingkaran/unsur" },
        { label: "KELILING DAN LUAS LINGKARAN", route: "/materi/lingkaran/keliling-luas" },
        { label: "KAITAN LINGKARAN DENGAN BANGUN DATAR LAINNYA", route: "/materi/lingkaran/bangun-datar" },
        { label: "PANJANG BUSUR DAN LUAS JURING", route: "/materi/lingkaran/busur-juring" },
        { label: "SUDUT PUSAT DAN SUDUT KELILING", route: "/materi/lingkaran/sudut-pusat-keliling" },
        { label: "PENERAPAN KONSEP LINGKARAN PADA PERMASALAHAN KONTEKSTUAL", route: "/materi/lingkaran/penerapan" },
      ],
    },
    {
      label: "GARIS SINGGUNG LINGKARAN",
      subtopics: [
        { label: "PENGERTIAN DAN SIFAT GARIS SINGGUNG LINGKARAN", route: "/materi/gs-lingkaran/pengertian" },
        { label: "MENGHITUNG PANJANG GARIS SINGGUNG DARI TITIK DI LUAR LINGKARAN", route: "/materi/gs-lingkaran/hitung-panjang" },
        { label: "GARIS SINGGUNG PERSEKUTUAN LUAR (GSPL)", route: "/materi/gs-lingkaran/gspl" },
        { label: "GARIS SINGGUNG PERSEKUTUAN DALAM (GSPD)", route: "/materi/gs-lingkaran/gspd" },
        { label: "SABUK LILITAN MINIMAL (PENERAPAN)", route: "/materi/gs-lingkaran/sabuk-lilitan" },
      ],
    },
    {
      label: "BANGUN RUANG SISI DATAR",
      subtopics: [
        { label: "UNSUR-UNSUR BANGUN RUANG", route: "/materi/brsd/unsur" },
        { label: "KUBUS", route: "/materi/brsd/kubus" },
        { label: "BALOK", route: "/materi/brsd/balok" },
        { label: "PRISMA", route: "/materi/brsd/prisma" },
        { label: "LIMAS", route: "/materi/brsd/limas" },
        { label: "BANGUN RUANG SISI DATAR GABUNGAN", route: "/materi/brsd/gabungan" },
        { label: "MASALAH KONTEKSTUAL YANG BERKAITAN DENGAN BANGUN RUANG SISI DATAR", route: "/materi/brsd/penerapan" },
      ],
    },
  ],
  "KELAS 9": [
    {
      label: "BILANGAN BERPANGKAT",
      subtopics: [
        { label: "PENGERTIAN DAN NOTASI PANGKAT", route: "/materi/pangkat/pengertian" },
        { label: "SIFAT-SIFAT OPERASI BILANGAN BERPANGKAT", route: "/materi/pangkat/sifat" },
        { label: "PANGKAT NOL, PANGKAT NEGATIF DAN PANGKAT PECAHAN", route: "/materi/pangkat/nol-negatif-pecahan" },
        { label: "BENTUK AKAR", route: "/materi/pangkat/akar" },
        { label: "NOTASI ILMIAH", route: "/materi/pangkat/ilmiah" },
      ],
    },
    {
      label: "KESEBANGUNAN DAN KEKONGRUENAN",
      subtopics: [
        { label: "KEKONGRUENAN BANGUN DATAR", route: "/materi/kesebangunan/kongruen-datar" },
        { label: "KEKONGRUENAN DUA SEGITIGA", route: "/materi/kesebangunan/kongruen-segitiga" },
        { label: "KESEBANGUNAN BANGUN DATAR", route: "/materi/kesebangunan/sebangun-datar" },
        { label: "KESEBANGUNAN DUA SEGITIGA", route: "/materi/kesebangunan/sebangun-segitiga" },
        { label: "KESEBANGUNAN KHUSUS PADA TRAPESIUM", route: "/materi/kesebangunan/khusus-trapesium" },
        { label: "PENERAPAN KESEBANGUNAN (MASALAH KONTEKSTUAL)", route: "/materi/kesebangunan/penerapan" },
      ],
    },
    {
      label: "TRANSFORMASI GEOMETRI",
      subtopics: [
        { label: "TRANSLASI (PERGESERAN)", route: "/materi/transformasi/translasi" },
        { label: "REFLEKSI (PENCERMINAN)", route: "/materi/transformasi/refleksi" },
        { label: "ROTASI (PERPUTARAN)", route: "/materi/transformasi/rotasi" },
        { label: "DILATASI (PERKALIAN/PERUBAHAN UKURAN)", route: "/materi/transformasi/dilatasi" },
      ],
    },
    {
      label: "BANGUN RUANG SISI LENGKUNG",
      subtopics: [
        { label: "TABUNG", route: "/materi/brsl/tabung" },
        { label: "KERUCUT", route: "/materi/brsl/kerucut" },
        { label: "BOLA", route: "/materi/brsl/bola" },
        { label: "PERUBAHAN VOLUME BANGUN RUANG SISI LENGKUNG", route: "/materi/brsl/perubahan-volume" },
        { label: "BANGUN RUANG SISI LENGKUNG GABUNGAN", route: "/materi/brsl/gabungan" },
      ],
    },
    {
      label: "STATISTIKA",
      subtopics: [
        { label: "PENGANTAR STATISTIKA DAN PENGUMPULAN DATA", route: "/materi/statistika/pengantar" },
        { label: "PENYAJIAN DATA", route: "/materi/statistika/penyajian" },
        { label: "UKURAN PEMUSATAN DATA (RATA- RATA DAN RATA-RATA GABUNGAN)", route: "/materi/statistika/mean" },
        { label: "UKURAN PEMUSATAN DATA (MEDIAN DAN MODUS)", route: "/materi/statistika/median-modus" },
        { label: "UKURAN LETAK DATA (KUARTIL)", route: "/materi/statistika/kuartil" },
        { label: "UKURAN PENYEBARAN DATA (JANGKAUAN, JANGKAUAN INTERKUARTIL, SIMPANGAN KUARTIL)", route: "/materi/statistika/penyebaran" },
      ],
    },
    {
      label: "PELUANG",
      subtopics: [
        { label: "RUANG SAMPEL DAN TITIK SAMPEL", route: "/materi/peluang/ruang-sampel" },
        { label: "PELUANG TEORETIK", route: "/materi/peluang/teoretik" },
        { label: "PELUANG EMPIRIK", route: "/materi/peluang/empirik" },
        { label: "FREKUENSI HARAPAN", route: "/materi/peluang/frekuensi-harapan" },
      ],
    },
    {
      label: "PERSAMAAN KUADRAT (PENGAYAAN)",
      subtopics: [
        { label: "BENTUK UMUM PERSAMAAN KUADRAT", route: "/materi/persamaan-kuadrat/bentuk-umum" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN PEMFAKTORAN", route: "/materi/persamaan-kuadrat/pemfaktoran" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN RUMUS KUADRATIK", route: "/materi/persamaan-kuadrat/rumus-kuadratik" },
        { label: "AKAR-AKAR PERSAMAAN KUADRAT DENGAN PELENGKAP KUADRAT", route: "/materi/persamaan-kuadrat/pelengkap-kuadrat" },
        { label: "DISKRIMINAN", route: "/materi/persamaan-kuadrat/diskriminan" },
        { label: "MENYUSUN PERSAMAAN KUADRAT BARU", route: "/materi/persamaan-kuadrat/menyusun" },
        { label: "PENERAPAN PERSAMAAN KUADRAT PADA PERMASALAHAN KONTEKSTUAL", route: "/materi/persamaan-kuadrat/penerapan" },
      ],
    },
    {
      label: "FUNGSI KUADRAT (PENGAYAAN)",
      subtopics: [
        { label: "BENTUK UMUM DAN KARAKTERISTIK GRAFIK", route: "/materi/fungsi-kuadrat/bentuk-umum" },
        { label: "TITIK POTONG TERHADAP SUMBU-SUMBU", route: "/materi/fungsi-kuadrat/titik-potong" },
        { label: "SUMBU SIMETRI DAN TITIK PUNCAK (OPTIMUM)", route: "/materi/fungsi-kuadrat/puncak" },
        { label: "MENGGAMBAR GRAFIK FUNGSI KUADRAT", route: "/materi/fungsi-kuadrat/grafik" },
        { label: "MENYUSUN FUNGSI KUADRAT", route: "/materi/fungsi-kuadrat/menyusun" },
        { label: "PENERAPAN FUNGSI KUADRAT (NILAI MAKSIMUM/MINIMUM)", route: "/materi/fungsi-kuadrat/penerapan" },
      ],
    },
  ],
};

// =============================================
// MATH GAME ARENA — daftar topik dan subtopik untuk /math-game-arena
// =============================================
export const mathGameArenaTopics: Record<string, { label: string; subtopics: { label: string; route: string }[] }[]> = {
  "KELAS 7": [
    {
      label: "BILANGAN BULAT",
      subtopics: [
        { label: "PENJUMLAHAN BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/penjumlahan" },
        { label: "PENGURANGAN BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/pengurangan" },
        { label: "PERKALIAN BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/perkalian" },
        { label: "PEMBAGIAN BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/pembagian" },
        { label: "OPERASI HITUNG CAMPURAN BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/campuran" },
        { label: "KPK DAN FPB", route: "/quiz-gamez/bilangan-bulat/kpk-fpb" },
      ],
    },
    {
      label: "BILANGAN RASIONAL",
      subtopics: [
        { label: "ARTI PECAHAN, PECAHAN SENILAI DAN MEMBANDINGKAN PECAHAN", route: "/quiz-gamez/bilangan-rasional/arti-pecahan" },
        { label: "PECAHAN CAMPURAN DAN PERSEN", route: "/quiz-gamez/bilangan-rasional/pecahan-campuran" },
        { label: "PENJUMLAHAN PECAHAN", route: "/quiz-gamez/bilangan-rasional/penjumlahan" },
        { label: "PENGURANGAN PECAHAN", route: "/quiz-gamez/bilangan-rasional/pengurangan" },
        { label: "PERKALIAN PECAHAN", route: "/quiz-gamez/bilangan-rasional/perkalian" },
        { label: "PEMBAGIAN PECAHAN", route: "/quiz-gamez/bilangan-rasional/pembagian" },
        { label: "BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/bentuk-desimal" },
        { label: "PENJUMLAHAN BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/penjumlahan-desimal" },
        { label: "PENGURANGAN BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/pengurangan-desimal" },
        { label: "PERKALIAN BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/perkalian-desimal" },
        { label: "PEMBAGIAN BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/pembagian-desimal" },
        { label: "PEMBULATAN BENTUK DESIMAL", route: "/quiz-gamez/bilangan-rasional/pembulatan-desimal" },
      ],
    },
    {
      label: "ALJABAR",
      subtopics: [
        { label: "PENGERTIAN DAN UNSUR-UNSUR BENTUK ALJABAR", route: "/quiz-gamez/aljabar/pengertian" },
        { label: "PENJUMLAHAN DAN PENGURANGAN BENTUK ALJABAR", route: "/quiz-gamez/aljabar/penjumlahan-pengurangan" },
        { label: "PERKALIAN BENTUK ALJABAR", route: "/quiz-gamez/aljabar/perkalian" },
        { label: "PEMBAGIAN BENTUK ALJABAR", route: "/quiz-gamez/aljabar/pembagian" },
        { label: "PEMANGKATAN BENTUK ALJABAR", route: "/quiz-gamez/aljabar/pemangkatan" },
        { label: "SUBSTITUSI BILANGAN PADA BENTUK ALJABAR", route: "/quiz-gamez/aljabar/substitusi" },
        { label: "FAKTORISASI BENTUK ALJABAR", route: "/quiz-gamez/aljabar/faktorisasi" },
        { label: "OPERASI PECAHAN BENTUK ALJABAR", route: "/quiz-gamez/aljabar/pecahan" },
      ],
    },
    {
      label: "PERSAMAAN DAN PERTIDAKSAMAAN LINEAR SATU VARIABEL",
      subtopics: [
        { label: "KALIMAT TERBUKA DAN TERTUTUP (PERNYATAAN)", route: "/quiz-gamez/plsv/kalimat" },
        { label: "PENGERTIAN PLSV, KESAMAAN, DAN PERNYATAAAN EKUIVALEN", route: "/quiz-gamez/plsv/pengertian" },
        { label: "PENYELESAIAN PERSAMAAN LINEAR SATU VARIABEL", route: "/quiz-gamez/plsv/penyelesaian" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERSAMAAN PADA SOAL CERITA", route: "/quiz-gamez/plsv/penerapan" },
        { label: "PENGERTIAN KETIDAKSAMAAN, PERTIDAKSAMAAN DAN PtLSV", route: "/quiz-gamez/plsv/pengertian-ptlsv" },
        { label: "PENYELESAIAN PERTIDAKSAMAAN LINEAR SATU VARIABEL", route: "/quiz-gamez/plsv/penyelesaian-ptlsv" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERTIDAKSAMAAN PADA SOAL CERITA", route: "/quiz-gamez/plsv/penerapan-ptlsv" },
      ],
    },
    {
      label: "PERBANDINGAN",
      subtopics: [
        { label: "PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO", route: "/quiz-gamez/perbandingan/rasio" },
        { label: "PERBANDINGAN SENILAI DAN BERBALIK NILAI", route: "/quiz-gamez/perbandingan/senilai-berbalik" },
        { label: "PERBANDINGAN CAMPURAN", route: "/quiz-gamez/perbandingan/campuran" },
        { label: "SKALA", route: "/quiz-gamez/perbandingan/skala" },
      ],
    },
    {
      label: "ARITMETIKA SOSIAL",
      subtopics: [
        { label: "JUAL BELI, UNTUNG DAN RUGI", route: "/quiz-gamez/aritmetika-sosial/jual-beli" },
        { label: "DISKON", route: "/quiz-gamez/aritmetika-sosial/diskon" },
        { label: "BRUTO, NETTO DAN TARA", route: "/quiz-gamez/aritmetika-sosial/bruto-netto-tara" },
        { label: "BUNGA TUNGGAL", route: "/quiz-gamez/aritmetika-sosial/bunga-tunggal" },
        { label: "PAJAK PERTAMBAHAN NILAI (PPN)", route: "/quiz-gamez/aritmetika-sosial/ppn" },
        { label: "PAJAK PENGHASILAN (PPH)", route: "/quiz-gamez/aritmetika-sosial/pph" },
      ],
    },
    {
      label: "GARIS DAN SUDUT",
      subtopics: [
        { label: "HUBUNGAN 2 GARIS", route: "/quiz-gamez/garis-dan-sudut/hubungan-garis" },
        { label: "SUDUT PELURUS, SUDUT PENYIKUT DAN SUDUT BERTOLAK BELAKANG", route: "/quiz-gamez/garis-dan-sudut/hubungan-sudut" },
        { label: "SIFAT SUDUT DUA GARIS SEJAJAR JIKA DIPOTONG GARIS LAIN", route: "/quiz-gamez/garis-dan-sudut/sudut-sejejar" },
        { label: "JUMLAH SUDUT PADA SEGI BANYAK", route: "/quiz-gamez/garis-dan-sudut/segi-banyak" },
      ],
    },
    {
      label: "SEGITIGA DAN SEGIEMPAT",
      subtopics: [
        { label: "GARIS BERAT, GARIS BAGI DAN GARIS TINGGI PADA SEGITIGA", route: "/quiz-gamez/segitiga-dan-segiempat/garis-segitiga" },
        { label: "SEGITIGA (KELILING)", route: "/quiz-gamez/segitiga-dan-segiempat/keliling-segitiga" },
        { label: "SEGITIGA (LUAS)", route: "/quiz-gamez/segitiga-dan-segiempat/luas-segitiga" },
        { label: "SEGIEMPAT (KELILING)", route: "/quiz-gamez/segitiga-dan-segiempat/keliling-segiempat" },
        { label: "SEGIEMPAT (LUAS)", route: "/quiz-gamez/segitiga-dan-segiempat/luas-segiempat" },
      ],
    },
    {
      label: "HIMPUNAN",
      subtopics: [
        { label: "PENGERTIAN DAN KEANGGOTAAAN SUATU HIMPUNAN", route: "/quiz-gamez/himpunan/pengertian" },
        { label: "MENYATAKAN SUATU HIMPUNAN, HIMPUNAN KOSONG DAN HIMPUNAN SEMESTA", route: "/quiz-gamez/himpunan/menyatakan" },
        { label: "DIAGRAM VENN", route: "/quiz-gamez/himpunan/diagram-venn" },
        { label: "HIMPUNAN BAGIAN", route: "/quiz-gamez/himpunan/bagian" },
        { label: "OPERASI HIMPUNAN", route: "/quiz-gamez/himpunan/operasi" },
      ],
    },
  ],
  "KELAS 8": [
    {
      label: "POLA BILANGAN",
      subtopics: [
        { label: "PENGERTIAN POLA DAN BARISAN BILANGAN", route: "/quiz-gamez/pola-bilangan/pengertian" },
        { label: "POLA-POLA KHUSUS", route: "/quiz-gamez/pola-bilangan/pola-khusus" },
        { label: "POLA ARITMETIKA", route: "/quiz-gamez/pola-bilangan/pola-aritmetika" },
        { label: "POLA GEOMETRI", route: "/quiz-gamez/pola-bilangan/pola-geometri" },
      ],
    },
    {
      label: "KOORDINAT CARTECIUS",
      subtopics: [
        { label: "UNSUR-UNSUR PADA DIAGRAM CARTECIUS", route: "/quiz-gamez/koordinat-cartesius/unsur" },
        { label: "JARAK ANTAR DUA TITIK DAN JARAK TITIK KE GARIS", route: "/quiz-gamez/koordinat-cartesius/jarak" },
        { label: "POSISI RELATIF SUATU TITIK TERHADAP SUATU GARIS", route: "/quiz-gamez/koordinat-cartesius/posisi" },
      ],
    },
    {
      label: "RELASI DAN FUNGSI",
      subtopics: [
        { label: "PENGERTIAN RELASI DAN PENYAJIANNYA", route: "/quiz-gamez/relasi-dan-fungsi/pengertian-relasi" },
        { label: "PENGERTIAN FUNGSI DAN PENYAJIANNYA", route: "/quiz-gamez/relasi-dan-fungsi/pengertian-fungsi" },
        { label: "MENENTUKAN BANYAK FUNGSI DAN KORESPONDENSI SATU-SATU", route: "/quiz-gamez/relasi-dan-fungsi/banyak-fungsi" },
        { label: "NOTASI DAN RUMUS FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/notasi-rumus" },
        { label: "GRAFIK FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/grafik" },
      ],
    },
    {
      label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL",
      subtopics: [
        { label: "DEFINISI DAN BENTUK UMUM SPLDV BESERTA KAITANNYA DENGAN PLDV", route: "/quiz-gamez/spldv/definisi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE GRAFIK", route: "/quiz-gamez/spldv/grafik" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE SUBSTITUSI", route: "/quiz-gamez/spldv/substitusi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE ELIMINASI", route: "/quiz-gamez/spldv/eliminasi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE CAMPURAN", route: "/quiz-gamez/spldv/campuran" },
        { label: "MEMBUAT MODEL DARI PERMASALAHAN YANG BERKAITAN DENGAN SPLDV", route: "/quiz-gamez/spldv/model" },
        { label: "PENYELESAIAN MASALAH YANG BERKAITAN DENGAN SPLDV", route: "/quiz-gamez/spldv/penyelesaian" },
      ],
    },
    {
      label: "PERSAMAAN GARIS LURUS",
      subtopics: [
        { label: "GRAFIK PERSAMAAN GARIS LURUS", route: "/quiz-gamez/pgl/grafik" },
        { label: "GRADIEN (KEMIRINGAN GARIS)", route: "/quiz-gamez/pgl/gradien" },
        { label: "MENENTUKAN PERSAMAAN GARIS LURUS", route: "/quiz-gamez/pgl/persamaan" },
        { label: "HUBUNGAN 2 GARIS", route: "/quiz-gamez/pgl/hubungan-garis" },
        { label: "APLIKASI PERSAMAAN GARIS PADA SOAL KONTEKSTUAL", route: "/quiz-gamez/pgl/aplikasi" },
      ],
    },
    {
      label: "TEOREMA PYTHAGORAS",
      subtopics: [
        { label: "PEMBUKTIAN TEOREMA PYTHAGORAS", route: "/quiz-gamez/pythagoras/pembuktian" },
        { label: "MENGHITUNG PANJANG SEGITIGA SIKU-SIKU", route: "/quiz-gamez/pythagoras/hitung-panjang" },
        { label: "TRIPLE PYTHAGORAS", route: "/quiz-gamez/pythagoras/triple" },
        { label: "PYHTAGORAS DAN JENIS-JENIS SEGITIGA", route: "/quiz-gamez/pythagoras/jenis-segitiga" },
        { label: "PERBANDINGAN SISI SEGITIGA SIKU-SIKU SUDUT KHUSUS", route: "/quiz-gamez/pythagoras/perbandingan-sisi" },
        { label: "PENERAPAN TEOREMA PYTHAGORAS PADA MASALAH KONTEKSTUAL", route: "/quiz-gamez/pythagoras/penerapan" },
      ],
    },
    {
      label: "LINGKARAN",
      subtopics: [
        { label: "UNSUR-UNSUR LINGKARAN", route: "/quiz-gamez/lingkaran/unsur" },
        { label: "KELILING DAN LUAS LINGKARAN", route: "/quiz-gamez/lingkaran/keliling-luas" },
        { label: "KAITAN LINGKARAN DENGAN BANGUN DATAR LAINNYA", route: "/quiz-gamez/lingkaran/bangun-datar" },
        { label: "PANJANG BUSUR DAN LUAS JURING", route: "/quiz-gamez/lingkaran/busur-juring" },
        { label: "SUDUT PUSAT DAN SUDUT KELILING", route: "/quiz-gamez/lingkaran/sudut-pusat-keliling" },
        { label: "PENERAPAN KONSEP LINGKARAN PADA PERMASALAHAN KONTEKSTUAL", route: "/quiz-gamez/lingkaran/penerapan" },
      ],
    },
    {
      label: "GARIS SINGGUNG LINGKARAN",
      subtopics: [
        { label: "PENGERTIAN DAN SIFAT GARIS SINGGUNG LINGKARAN", route: "/quiz-gamez/gs-lingkaran/pengertian" },
        { label: "MENGHITUNG PANJANG GARIS SINGGUNG DARI TITIK DI LUAR LINGKARAN", route: "/quiz-gamez/gs-lingkaran/hitung-panjang" },
        { label: "GARIS SINGGUNG PERSEKUTUAN LUAR (GSPL)", route: "/quiz-gamez/gs-lingkaran/gspl" },
        { label: "GARIS SINGGUNG PERSEKUTUAN DALAM (GSPD)", route: "/quiz-gamez/gs-lingkaran/gspd" },
        { label: "SABUK LILITAN MINIMAL (PENERAPAN)", route: "/quiz-gamez/gs-lingkaran/sabuk-lilitan" },
      ],
    },
    {
      label: "BANGUN RUANG SISI DATAR",
      subtopics: [
        { label: "UNSUR-UNSUR BANGUN RUANG", route: "/quiz-gamez/brsd/unsur" },
        { label: "KUBUS", route: "/quiz-gamez/brsd/kubus" },
        { label: "BALOK", route: "/quiz-gamez/brsd/balok" },
        { label: "PRISMA", route: "/quiz-gamez/brsd/prisma" },
        { label: "LIMAS", route: "/quiz-gamez/brsd/limas" },
        { label: "BANGUN RUANG SISI DATAR GABUNGAN", route: "/quiz-gamez/brsd/gabungan" },
        { label: "MASALAH KONTEKSTUAL YANG BERKAITAN DENGAN BANGUN RUANG SISI DATAR", route: "/quiz-gamez/brsd/penerapan" },
      ],
    },
  ],
  "KELAS 9": [
    {
      label: "BILANGAN BERPANGKAT",
      subtopics: [
        { label: "PENGERTIAN DAN NOTASI PANGKAT", route: "/quiz-gamez/pangkat/pengertian" },
        { label: "SIFAT-SIFAT OPERASI BILANGAN BERPANGKAT", route: "/quiz-gamez/pangkat/sifat" },
        { label: "PANGKAT NOL, PANGKAT NEGATIF DAN PANGKAT PECAHAN", route: "/quiz-gamez/pangkat/nol-negatif-pecahan" },
        { label: "BENTUK AKAR", route: "/quiz-gamez/pangkat/akar" },
        { label: "NOTASI ILMIAH", route: "/quiz-gamez/pangkat/ilmiah" },
      ],
    },
    {
      label: "KESEBANGUNAN DAN KEKONGRUENAN",
      subtopics: [
        { label: "KEKONGRUENAN BANGUN DATAR", route: "/quiz-gamez/kesebangunan/kongruen-datar" },
        { label: "KEKONGRUENAN DUA SEGITIGA", route: "/quiz-gamez/kesebangunan/kongruen-segitiga" },
        { label: "KESEBANGUNAN BANGUN DATAR", route: "/quiz-gamez/kesebangunan/sebangun-datar" },
        { label: "KESEBANGUNAN DUA SEGITIGA", route: "/quiz-gamez/kesebangunan/sebangun-segitiga" },
        { label: "KESEBANGUNAN KHUSUS PADA TRAPESIUM", route: "/quiz-gamez/kesebangunan/khusus-trapesium" },
        { label: "PENERAPAN KESEBANGUNAN (MASALAH KONTEKSTUAL)", route: "/quiz-gamez/kesebangunan/penerapan" },
      ],
    },
    {
      label: "TRANSFORMASI GEOMETRI",
      subtopics: [
        { label: "TRANSLASI (PERGESERAN)", route: "/quiz-gamez/transformasi/translasi" },
        { label: "REFLEKSI (PENCERMINAN)", route: "/quiz-gamez/transformasi/refleksi" },
        { label: "ROTASI (PERPUTARAN)", route: "/quiz-gamez/transformasi/rotasi" },
        { label: "DILATASI (PERKALIAN/PERUBAHAN UKURAN)", route: "/quiz-gamez/transformasi/dilatasi" },
      ],
    },
    {
      label: "BANGUN RUANG SISI LENGKUNG",
      subtopics: [
        { label: "TABUNG", route: "/quiz-gamez/brsl/tabung" },
        { label: "KERUCUT", route: "/quiz-gamez/brsl/kerucut" },
        { label: "BOLA", route: "/quiz-gamez/brsl/bola" },
        { label: "PERUBAHAN VOLUME BANGUN RUANG SISI LENGKUNG", route: "/quiz-gamez/brsl/perubahan-volume" },
        { label: "BANGUN RUANG SISI LENGKUNG GABUNGAN", route: "/quiz-gamez/brsl/gabungan" },
      ],
    },
    {
      label: "STATISTIKA",
      subtopics: [
        { label: "PENGANTAR STATISTIKA DAN PENGUMPULAN DATA", route: "/quiz-gamez/statistika/pengantar" },
        { label: "PENYAJIAN DATA", route: "/quiz-gamez/statistika/penyajian" },
        { label: "UKURAN PEMUSATAN DATA (RATA- RATA DAN RATA-RATA GABUNGAN)", route: "/quiz-gamez/statistika/mean" },
        { label: "UKURAN PEMUSATAN DATA (MEDIAN DAN MODUS)", route: "/quiz-gamez/statistika/median-modus" },
        { label: "UKURAN LETAK DATA (KUARTIL)", route: "/quiz-gamez/statistika/kuartil" },
        { label: "UKURAN PENYEBARAN DATA (JANGKAUAN, JANGKAUAN INTERKUARTIL, SIMPANGAN KUARTIL)", route: "/quiz-gamez/statistika/penyebaran" },
      ],
    },
    {
      label: "PELUANG",
      subtopics: [
        { label: "RUANG SAMPEL DAN TITIK SAMPEL", route: "/quiz-gamez/peluang/ruang-sampel" },
        { label: "PELUANG TEORETIK", route: "/quiz-gamez/peluang/teoretik" },
        { label: "PELUANG EMPIRIK", route: "/quiz-gamez/peluang/empirik" },
        { label: "FREKUENSI HARAPAN", route: "/quiz-gamez/peluang/frekuensi-harapan" },
      ],
    },
    {
      label: "PERSAMAAN KUADRAT (PENGAYAAN)",
      subtopics: [
        { label: "BENTUK UMUM PERSAMAAN KUADRAT", route: "/quiz-gamez/persamaan-kuadrat/bentuk-umum" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN PEMFAKTORAN", route: "/quiz-gamez/persamaan-kuadrat/pemfaktoran" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN RUMUS KUADRATIK", route: "/quiz-gamez/persamaan-kuadrat/rumus-kuadratik" },
        { label: "AKAR-AKAR PERSAMAAN KUADRAT DENGAN PELENGKAP KUADRAT", route: "/quiz-gamez/persamaan-kuadrat/pelengkap-kuadrat" },
        { label: "DISKRIMINAN", route: "/quiz-gamez/persamaan-kuadrat/diskriminan" },
        { label: "MENYUSUN PERSAMAAN KUADRAT BARU", route: "/quiz-gamez/persamaan-kuadrat/menyusun" },
        { label: "PENERAPAN PERSAMAAN KUADRAT PADA PERMASALAHAN KONTEKSTUAL", route: "/quiz-gamez/persamaan-kuadrat/penerapan" },
      ],
    },
    {
      label: "FUNGSI KUADRAT (PENGAYAAN)",
      subtopics: [
        { label: "BENTUK UMUM DAN KARAKTERISTIK GRAFIK", route: "/quiz-gamez/fungsi-kuadrat/bentuk-umum" },
        { label: "TITIK POTONG TERHADAP SUMBU-SUMBU", route: "/quiz-gamez/fungsi-kuadrat/titik-potong" },
        { label: "SUMBU SIMETRI DAN TITIK PUNCAK (OPTIMUM)", route: "/quiz-gamez/fungsi-kuadrat/puncak" },
        { label: "MENGGAMBAR GRAFIK FUNGSI KUADRAT", route: "/quiz-gamez/fungsi-kuadrat/grafik" },
        { label: "MENYUSUN FUNGSI KUADRAT", route: "/quiz-gamez/fungsi-kuadrat/menyusun" },
        { label: "PENERAPAN FUNGSI KUADRAT (NILAI MAKSIMUM/MINIMUM)", route: "/quiz-gamez/fungsi-kuadrat/penerapan" },
      ],
    },
  ],
};