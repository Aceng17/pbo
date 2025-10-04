class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;  // Atribut publik
    this.nim = nim;    // Atribut publik

    let _nilai = nilai;  // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}

// Contoh penggunaan
const mhs1 = new Mahasiswa('Marcellino', '20240039', 90);
console.log(`Nilai awal: ${mhs1.getNilai()}`); // Output: 90

mhs1.setNilai(95);
console.log(`Nilai setelah diubah: ${mhs1.getNilai()}`); // Output: 95

mhs1.setNilai(150); // Output: Nilai harus antara 0 dan 100

const mhs2 = new Mahasiswa("udin", "123456", "80");
console.log(`Nilai awal: ${mhs2.getNilai()}`); // Output: 80
mhs2.setNilai(90);
console.log(`Nilai setelah diubah: ${mhs2.getNilai()}`); // Output: 90
mhs2.setNilai(150); // Output: Nilai harus antara 0 dan 100

const mhs3 = new Mahasiswa("satura", "56789", "70");
console.log(`Nilai awal: ${mhs3.getNilai()}`); // Output: 70
mhs3.setNilai(93);
console.log(`Nilai setelah diubah: ${mhs3.getNilai()}`); // Output: 93
mhs3.setNilai(150); // Output: Nilai harus antara 0 dan 100




