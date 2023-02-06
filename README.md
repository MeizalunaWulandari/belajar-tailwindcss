>npx tailwindcss -o ./public/css/style.min.css --minify <br>
>Untuk meminify file output <br>

>[] untuk arbitrary value / nilai sembarang <br>

>Jika ingin membuat transisi keluar dari elementnya gunakan group<br>

>Untuk memberikan nilai minus berikan tanda - sebelum nama class `-top-0`<br>

>`flex`-wrap digunakan agar flex tidak memaksakan ketika ukuran telah tercukupi<br>
>`gap-6` digunakan sebagai pengganti margin pada flex<br>
>`sm:mb-0` Untuk mereset margin bottom 10 pada breakpoin sebelumnya agar yang digunakan `gap-6`<br>

>`gap-` jarak antar kolom<br>
>Arbitary value `aspect-[4/3]` digunkan karna di tailwind tidak menyediakan utility untuk ratio 4/3<br>

>`base` style utama yang menjadi dasar/default dari tailwind<br>
>`utilities` tailwind akan memasukan class utility yang kita gunakan<br>
>`@layer` digunakan ketika kita ingin memodifikasi bawaan tailwind<br>
>`theme()` digunakan pada saat kita ingin menggunakan nilai yang kita buat pada varibale theme (tailwind.config.js)<br>
>`@apply` digunakan ketika kita ingin memasukann class utility milik tailwind kedalam custom css kita secara inline<br>
>`group` tidak bisa dimasukan kedalam `@apply`<br>