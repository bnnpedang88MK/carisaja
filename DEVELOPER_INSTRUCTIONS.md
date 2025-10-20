# Developer Instructions

Langkah-langkah untuk mengatur deployment otomatis dan proteksi branch:

1. Buat GitHub Action untuk deploy `main` → `gh-pages`:
   - Buat file `.github/workflows/deploy-main-to-gh-pages.yml` dengan isi seperti di README.
   - Pastikan action `peaceiris/actions-gh-pages@v3` dapat dijalankan (gunakan `GITHUB_TOKEN`).

2. Aktifkan GitHub Pages:
   - Buka `Settings → Pages` pada repo
   - Pilih Source: `gh-pages` branch, folder `/ (root)`

3. Aktifkan Branch Protection untuk `main`:
   - Buka `Settings → Branches → Add rule`
   - Masukkan `main`, centang `Require pull request reviews before merging`, dan `Include administrators` jika perlu.

4. Setelah langkah di atas, setiap push ke `main` akan dipublikasikan otomatis ke branch `gh-pages`.

Jika Anda ingin, saya dapat membuat file workflow di fork atau memberikan file YAML di sini sehingga Anda bisa copy-paste.
