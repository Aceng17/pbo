class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.);
  }
}

// Membuat objek dari class Mahasiswa
const mhs1 = new Mahasiswa("Marcellino Lamusu", "20240039", "Teknik Informatika");
mhs1.belajar();
