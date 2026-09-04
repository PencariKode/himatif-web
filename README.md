This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

> **Rekomendasi:** Gunakan [Bun](https://bun.sh) sebagai package manager, **bukan Node.js/npm**. Bun jauh lebih cepat untuk install dependencies dan menjalankan project.

Install dependencies:

```bash
bun install
```

Jalankan development server:

```bash
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

---

## Alur Kerja (Wajib Diikuti)

### 1. Buat Branch Baru Sebelum Mulai Ngoding

**Jangan pernah langsung coding di branch `main`!**

Setiap mengerjakan fitur, wajib membuat branch baru terlebih dahulu dengan format nama berikut:

```
<fiturutama>/[fiturkecil]
```

- `fiturutama` → nama fitur utama yang dikerjakan (wajib ada)
- `fiturkecil` → nama sub-fitur yang lebih spesifik (opsional, hanya jika diperlukan)

**Contoh:**

```bash
# Dengan sub-fitur
git checkout -b login/resetpass

# Tanpa sub-fitur
git checkout -b login
git checkout -b navbar
git checkout -b dashboard/statistik
```

---

### 2. Push & Buat Pull Request Setelah Fitur Selesai

Setelah fitur selesai dikerjakan, langsung push branch ke GitHub:

```bash
git push origin <nama-branch>
```

Kemudian buat **Pull Request (PR)** di GitHub dari branch kamu ke `main`.

> ⚠️ **Penting:** Setelah membuat PR, **segera tag/mention Bang Panji di grup Litbang** untuk minta di-review, di-acc, dan di-merge. Jangan tunggu lama karena bisa menghambat orang lain!

---

### 3. Cegah Conflict — Ini Tanggung Jawab Bersama!

> ⚠️ **Conflict bisa terjadi kalau kita tidak disiplin.** Berikut hal-hal yang harus selalu dilakukan:

- **Jangan mengerjakan file yang sama** dengan orang lain secara bersamaan tanpa koordinasi.
- **Selalu komunikasikan** di grup jika mau mengubah file/komponen yang kemungkinan juga diedit orang lain.
- **Buat branch se-spesifik mungkin** agar scope perubahan jelas dan tidak saling tumpang tindih.
- Sebelum push, pastikan branch kamu sudah **up-to-date** dengan `main`:

```bash
git fetch origin
git merge origin/main
# atau
git rebase origin/main
```

Selesaikan conflict (jika ada) **secara lokal** sebelum push.

---

### 4. Sebelum Mulai Fitur Baru — Selalu Pull Dulu!

Setelah PR kamu di-merge (atau ingin mulai fitur baru), **jangan langsung buat branch dari kondisi lokal yang sudah lama.**

Pastikan kamu selalu pull perubahan terbaru dari `main` terlebih dahulu:

```bash
git checkout main
git pull origin main
```

Baru setelah itu buat branch baru untuk fitur berikutnya.

---

## Ringkasan Alur Kerja

```
pull origin main
    ↓
buat branch baru (misal: fitur/sub-fitur)
    ↓
coding & commit
    ↓
push branch ke GitHub
    ↓
buat Pull Request
    ↓
tag Bang Panji di grup Litbang → tunggu acc & merge
    ↓
pull origin main (untuk fitur berikutnya)
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-building/deploying) for more details.
