const completions = [
  {
    id: 0,
    image:
      'http://esto.my.id/files/images/certificates/thumb/bwa-laravel-vue-js.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/bwa-laravel-vue-js.jpg',
    institution: 'BuildWith Angga',
    name: 'Fullstack Laravel Vue JS',
    date: '2020',
    description: `Kali ini, Anda akan membangun website e-commerce menggunakan framework Laravel dan Vue JavaScript agar web tampil mutakhir, dinamis dan interaktif. Selain itu, kita juga akan belajar cara membangun suatu API (App Programming Interface) yang nantinya bisa digunakan di beberapa platform semisal web, smartphone dan tablet. Setelah web berhasil dibuat, kita akan menyimpannya di VPS agar dapat diakses oleh user di seluruh dunia melalui browser yakni Firefox, Google Chrome, Opera dan peramban lainnya.`,
    link: 'https://buildwithangga.com/cek-sertifikat',
  },
  {
    id: 1,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-javascript-dasar.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-javascript-dasar.jpg',
    institution: 'Dicoding Academy',
    name: 'Belajar Dasar Pemrograman JavaScript',
    date: '2021',
    description: `Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.Js.`,
    link: 'https://www.dicoding.com/certificates/N9ZOD19Q8PG5',
  },
  {
    id: 2,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-web-dasar.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-web-dasar.jpg',
    institution: 'Dicoding Academy',
    name: 'Belajar Dasar Pemrograman Web',
    date: '2020',
    description: `Kelas ini membahas tuntas dasar HTML, CSS dan JavaScript sebagai tiga fondasi pembuatan website. Fondasi tersebut diperlukan untuk Anda yang ingin mengembangkan kemampuan pengembangan website ke tahap yang lebih lanjut. Disusun dan diverifikasi oleh tim expert Dicoding, materi yang disajikan terstruktur dan komprehensif.`,
    link: 'https://www.dicoding.com/certificates/ERZR55O3WPYV',
  },
  {
    id: 3,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-web-fundamental.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-web-fundamental.jpg',
    institution: 'Dicoding Academy',
    name: 'Front-end Web Development Fundamental',
    date: '2020',
    description: `Kelas ini membahas tuntas penerapan sintaks terbaru JavaScript, Web Component, Build Tools, dan AJAX untuk membangun website dengan teknik yang simple, reusable, dan optimal. Kurikulum telah disusun dan diverifikasi oleh tim expert Dicoding bersama praktisi industri agar materi yang disajikan terstruktur dan komprehensif.`,
    link: 'https://www.dicoding.com/certificates/N9ZODENK6PG5',
  },
  {
    id: 4,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-dart.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-dart.jpg',
    institution: 'Dicoding Academy',
    name: 'Memulai Pemrograman dengan Dart',
    date: '2021',
    description: `Kelas ditujukan bagi pemula yang ingin belajar dasar bahasa pemrograman Dart dengan mengacu pada standar industri. Di akhir kelas, siswa dapat membuat program Dart dengan menggunakan IDE IntelliJ IDEA atau IDE Online seperti DartPad.`,
    link: 'https://www.dicoding.com/certificates/ERZR518EWPYV',
  },
  {
    id: 5,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-visualisasi-data.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-visualisasi-data.jpg',
    institution: 'Dicoding Academy',
    name: 'Belajar Visualisasi Data',
    date: '2020',
    description: `Kelas ditujukan bagi pemula yang ingin memulai karirnya di bidang pengolahan data dengan mengacu pada standar kompetensi industri. Di akhir kelas, siswa dapat membuat sebuah visualisasi data yang efektif menggunakan Google Sheets sesuai teknik praktik terbaik industri, sehingga meningkatkan nilainya dalam berkarier sebagai Software Developer.`,
    link: 'https://www.dicoding.com/certificates/0LZ0D8Q3NX65',
  },
  {
    id: 6,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-python.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dicoding-python.jpg',
    institution: 'Dicoding Academy',
    name: 'Memulai Pemrograman dengan Python',
    date: '2020',
    description: `Kelas ditujukan bagi pemula yang ingin belajar dasar bahasa pemrograman Python dengan mengacu pada standar industri. Di akhir kelas, siswa dapat membuat program Python dengan menggunakan IDE Jupyter Notebook, Google Colab, atau IBM Watson Studio.`,
    link: 'https://www.dicoding.com/certificates/N9ZODE55DPG5',
  },
  {
    id: 7,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-python-fundamental.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-python-fundamental.jpg',
    institution: 'DQLab',
    name: 'Python Fundamental for Data Science',
    date: '2020',
    description: `No description yet`,
    link: 'https://www.dqlab.id/',
  },
  {
    id: 8,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-introduction-ds-with-python.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-introduction-ds-with-python.jpg',
    institution: 'DQLab',
    name: 'Introduction Data Science with Python',
    date: '2020',
    description: `No description yet`,
    link: 'https://www.dqlab.id/',
  },
  {
    id: 9,
    image:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-data-wrangling.jpg',
    thumb:
      'http://esto.my.id/files/images/certificates/thumb/dqlab-data-wrangling.jpg',
    institution: 'DQLab',
    name: 'Data Wrangling Python',
    date: '2020',
    description: `No description yet`,
    link: 'https://www.dqlab.id/',
  },
];

export default completions;
