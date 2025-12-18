## Program 1: Knight's Tour Problem

### Deskripsi
Program untuk menyelesaikan masalah perjalanan kuda catur (Knight's Tour) pada papan catur 8x8, di mana kuda harus mengunjungi semua kotak tepat satu kali.

### Fitur
- **Open Tour**: Kuda mengunjungi semua kotak tanpa harus kembali ke posisi awal
- **Closed Tour**: Kuda mengunjungi semua kotak dan dapat kembali ke posisi awal
- Visualisasi animasi langkah demi langkah
- Kontrol kecepatan animasi
- Pilih posisi awal bebas

### Cara Penggunaan

#### 1. Pilih Mode
- **Open Tour**: Untuk tour terbuka (tidak perlu kembali ke awal)
- **Closed Tour**: Untuk tour tertutup (harus bisa kembali ke awal)

#### 2. Tentukan Posisi Awal
- Masukkan koordinat baris (0-7) dan kolom (0-7)
- Atau klik langsung pada kotak di papan catur

#### 3. Atur Kecepatan Animasi
- Geser slider untuk mengatur kecepatan (1-1000ms)
- Nilai lebih kecil = animasi lebih cepat

#### 4. Jalankan Program
- Klik tombol **"Mulai"**
- Tunggu animasi selesai
- Perhatikan angka pada setiap kotak yang menunjukkan urutan kunjungan

### Contoh Penggunaan
```
Mode: Open Tour
Posisi Awal: Baris 0, Kolom 0
Kecepatan: 100ms
→ Klik "Mulai"
→ Lihat kuda bergerak mengunjungi semua kotak
```

### Algoritma
- **Warnsdorff's Heuristic**: Memilih langkah dengan kemungkinan terendah untuk langkah berikutnya
- **Backtracking**: Mencari solusi dengan mencoba semua kemungkinan

---

## Program 2: Longest Increasing Subsequence (LIS)

### Deskripsi
Program untuk mencari subsequence monoton terpanjang (longest increasing subsequence) dari sebuah urutan bilangan menggunakan algoritma Dynamic Programming.

### Fitur
- Mencari LIS dari urutan bilangan
- Visualisasi decision tree
- Menampilkan semua kemungkinan LIS jika ada lebih dari satu
- Langkah-langkah algoritma dijelaskan detail
- Generate random sequence

### Cara Penggunaan

#### 1. Input Urutan Bilangan
Masukkan urutan bilangan dengan format:
- Pisahkan dengan **koma**: `4, 1, 13, 7, 0, 2, 8, 11, 3`
- Atau dengan **spasi**: `4 1 13 7 0 2 8 11 3`

#### 2. Jalankan Program
Klik tombol **"Cari LIS"** untuk memulai algoritma

#### 3. Lihat Hasil
Program akan menampilkan:
- **Urutan Input**: Bilangan yang dimasukkan
- **LIS**: Subsequence terpanjang yang ditemukan
- **Panjang LIS**: Jumlah elemen dalam LIS
- **Decision Tree**: Visualisasi pohon keputusan
- **Langkah-langkah**: Proses algoritma Dynamic Programming

#### 4. Fitur Tambahan
- **Generate Random**: Membuat urutan bilangan acak
- **Reset**: Mengembalikan ke contoh default

### Contoh Penggunaan

#### Contoh 1: Input Default
```
Input: 4, 1, 13, 7, 0, 2, 8, 11, 3
→ Klik "Cari LIS"
Hasil LIS: 0 → 2 → 8 → 11
Panjang: 4
```

#### Contoh 2: Input Custom
```
Input: 10, 9, 2, 5, 3, 7, 101, 18
→ Klik "Cari LIS"
Hasil LIS: 2 → 3 → 7 → 18
Panjang: 4
```

#### Contoh 3: Multiple LIS
```
Input: 1, 3, 2, 4
→ Klik "Cari LIS"
Hasil:
1. 1 → 3 → 4
2. 1 → 2 → 4
Panjang: 3
```

### Penjelasan Output

#### Urutan Input
Menampilkan semua bilangan yang diinputkan dalam bentuk kotak biru.

#### LIS Result
Menampilkan subsequence terpanjang dalam kotak hijau dengan tanda panah (→).

#### Info Box
- **Panjang LIS**: Jumlah elemen dalam subsequence
- **Subsequence**: Urutan bilangan hasil LIS

#### Langkah-langkah Algoritma
Menampilkan proses Dynamic Programming:
- Inisialisasi: dp[i] = 1 untuk semua i
- Iterasi: Untuk setiap elemen, cek elemen sebelumnya
- Update: dp[i] = max(dp[i], dp[j] + 1) jika arr[j] < arr[i]

### Algoritma
- **Dynamic Programming**: Kompleksitas O(n²)
- **Backtracking**: Untuk merekonstruksi semua kemungkinan LIS

---

## Cara Menjalankan

### Persyaratan
- Browser modern (Chrome, Firefox, Edge, Safari)
- Tidak perlu instalasi library tambahan
- Tidak perlu koneksi internet

### Langkah-langkah
1. Buka file HTML di browser
2. Program siap digunakan
3. Ikuti instruksi di atas sesuai program yang ingin dijalankan

---

## Tips Penggunaan

### Knight's Tour
- Untuk **Closed Tour**, tidak semua posisi awal memiliki solusi
- Posisi tengah papan biasanya lebih sulit untuk Closed Tour
- Gunakan kecepatan rendah (10-50ms) untuk melihat detail pergerakan
- Gunakan kecepatan tinggi (500-1000ms) untuk mempelajari pola

### LIS
- Semakin panjang input, semakin lama waktu komputasi
- Generate Random untuk eksperimen dengan data berbeda
- Perhatikan langkah-langkah untuk memahami algoritma DP
- Jika ada multiple LIS, semua akan ditampilkan

---

##Catatan Teknis

### Knight's Tour
- Menggunakan Warnsdorff's Heuristic untuk efisiensi
- Backtracking digunakan saat heuristic gagal
- Visualisasi real-time dengan delay yang bisa diatur

### LIS
- Algoritma DP dengan kompleksitas waktu O(n²)
- Space complexity O(n)
- Dapat menemukan semua kemungkinan LIS

---

## Troubleshooting

### Knight's Tour
**Masalah**: Closed Tour tidak ditemukan
- **Solusi**: Coba posisi awal yang berbeda
- **Catatan**: Tidak semua posisi memiliki solusi Closed Tour

**Masalah**: Animasi terlalu cepat/lambat
- **Solusi**: Sesuaikan slider kecepatan

### LIS
**Masalah**: Input tidak valid
- **Solusi**: Pastikan format input benar (pisahkan dengan koma atau spasi)
- **Solusi**: Gunakan angka bulat (integer)

**Masalah**: Hasil tidak muncul
- **Solusi**: Pastikan ada minimal 1 bilangan yang diinput
- **Solusi**: Refresh halaman dan coba lagi

---
