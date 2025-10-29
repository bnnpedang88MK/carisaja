# CariSaja

Versi ini adalah salinan resmi dari situs CariSaja yang dipublikasikan.

## Status
- Branch publik untuk Pages: `gh-pages`
- Halaman: https://bnnpedang88mk.github.io/carisaja/

## Instruksi penting (Jangan ubah tanpa persetujuan)
1. Jangan mengedit `index.html` langsung pada branch `main` tanpa membuat pull request.
2. Aktifkan Branch Protection pada branch `main` agar hanya perubahan lewat Pull Request yang dapat diterima.

### Cara mengaktifkan Branch Protection (GitHub)
1. Buka: `https://github.com/bnnpedang88MK/carisaja/settings/branches`
2. Klik "Add rule" dan masukkan `main` pada "Branch name pattern".
3. Centang opsi:
   - Require pull request reviews before merging
   - Require status checks to pass before merging (opsional)
   - Include administrators (opsional jika Anda ingin melindungi juga admin)
4. Simpan rule.

## Backup
Backup `index.html` disimpan di `backup/index.html` di repositori ini.

## Jika mau merilis ulang
- Edit file di branch terpisah, buat Pull Request, lalu lakukan merge setelah review.

Jika Anda mau, saya bisa pandu langkah aktivasi Branch Protection atau mengatur GitHub Actions untuk deployment otomatis.

---
Dibuat otomatis oleh skrip bantuan — simpan README ini sebagai catatan rilis.

Menggunakan Domain Kustom temukanaja.com dengan GitHub Pages (Namecheap)
Panduan langkah-demi-langkah untuk mengaitkan domain temukanaja.com yang dibeli lewat Namecheap dengan GitHub Pages (gh-pages).

Prasyarat
Domain temukanaja.com sudah dibeli di Namecheap
Akun GitHub dengan repository CariSaja yang ingin dipublikasikan sebagai Pages
Akses ke Namecheap Domain List dan DNS settings
(Opsional) Akses GitHub untuk mengatur Branch Protection, GitHub Actions, dan Pages
Ringkasan arsitektur
GitHub Pages utama: gh-pages (untuk Pages proyek)
Domain kustom: temukanaja.com
Subdomain: www.temukanaja.com akan mengarahkan ke konten GitHub Pages; apex domain temukanaja.com akan mengarah melalui A records ke IP GitHub Pages
Sertifikat SSL/TLS akan dibuat otomatis oleh GitHub Pages setelah DNS tersambung dengan benar
Langkah 1: Siapkan Pages di GitHub
Pastikan Pages di repository CariSaja diaktifkan (Settings > Pages) dan sumbernya mengarah ke konten yang sesuai (branch gh-pages atau build output).

Opsional: Tambahkan file CNAME di akar repository dengan isi:

temukanaja.com
jika Anda ingin menggunakan apex domain langsung tanpa www (CATATAN: Anda akan menggunakan A records untuk apex nanti; CNAME untuk apex tidak didukung jika menggunakan A records).

Tetapkan Custom domain di Settings > Pages:

Custom domain: temukanaja.com atau www.temukanaja.com (lebih umum gunakan www terlebih dahulu)
Selesaikan provisioning SSL oleh GitHub Pages (HTTPS akan tersedia setelah DNS terkonfigurasi).

Langkah 2: Konfigurasi DNS di Namecheap
Masuk ke Namecheap > Domain List > Kelola domain temukanaja.com.

Opsi A untuk Apex Domain (temukanaja.com)
Tambahkan 4 A Records yang mengarah ke IP GitHub Pages:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
Contoh entri (atur di Namecheap):

Host: @

Value: 185.199.108.153

TTL: Automatic

Host: @

Value: 185.199.109.153

TTL: Automatic

Host: @

Value: 185.199.110.153

TTL: Automatic

Host: @

Value: 185.199.111.153

TTL: Automatic

Opsi CNAME untuk www (www.temukanaja.com)
Tambahkan CNAME Record untuk subdomain www yang mengarah ke akun GitHub Pages Anda:

Host: www
Value: <username>.github.io (mis. bnnpedang88mk.github.io atau <username>.github.io)
TTL: Automatic
Catatan: Jangan menambahkan CNAME pada apex domain jika Anda menggunakan A Records. Gunakan Redirect jika ingin mem-forward temukanaja.com ke www.temukanaja.com.

Opsional: Pengalihan apex ke www
Untuk mengarahkan temukanaja.com ke www.temukanaja.com, gunakan Redirect Domain di Namecheap:

Type: Redirect Domain
Source URL: http://temukanaja.com/
Destination URL: http://www.temukanaja.com/
Redirect type: Permanent (301)
Langkah 3: Verifikasi di GitHub
Buka repository CariSaja > Settings > Pages.
Pastikan Custom domain terisi temukanaja.com atau www.temukanaja.com, dan HTTPS tercentang.
Jika perlu, jalankan ulang provisioning SSL (biasanya otomatis).
Langkah 4: Verifikasi DNS
Propagasi DNS bisa memerlukan beberapa menit hingga beberapa jam.
Cek dengan alat seperti DNSChecker untuk memastikan:
A records mengarah ke IP GitHub Pages untuk apex
CNAME untuk www mengarah ke <username>.github.io
Akses:
https://temukanaja.com (apex)
https://www.temukanaja.com (www)
Langkah 5: Branch Protection dan Rilis
Jika perlu perlindungan cabang (Branch Protection) pada main:
Buka GitHub > Repository > Settings > Branches
Add rule untuk main dengan opsi:
Require pull request reviews before merging
Require status checks to pass before merging (opsional)
Include administrators (opsional)
Untuk rilis ulang:
Edit file di branch terpisah, buat Pull Request, review, lalu merge ke main
GitHub Pages akan menampilkan perubahan sesuai konfigurasi Pages Anda
Langkah 6: Otomatisasi (GitHub Actions)
Anda bisa menambahkan GitHub Actions untuk deploy otomatis ke gh-pages saat push ke main.
Contoh workflow sederhana telah tersedia di contoh sebelumnya; sesuaikan publish_dir dengan build Anda.
Troubleshooting
Jika laman tidak muncul setelah propagation:
Periksa DNS propagation status
Pastikan tidak ada konflik DNS records untuk host yang sama
Jika HTTPS tidak aktif:
Pastikan domain terdaftar sebagai Custom domain di Pages
Tunggu beberapa saat hingga provisioning selesai
Instruksi tambahan (optional)
