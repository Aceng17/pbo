const tambah = require("./math");

test("Menjumlahkan 2 + 3 harus menghasilkan 5", () => {
    expect(tambah(2, 3)).toBe(5);
});
