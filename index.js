class BangunDatar {
  constructor(luas, keliling) {
    this.luas = luas;
    this.keliling = keliling;
  }

  hiyungPersegi(s) {
    this.luas = s * s;
    this.keliling = 4 * s;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungPersegiPanjang(p, l) {
    this.luas = p * l;
    this.keliling = 2 * p + 2 * l;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungSegitigaSikuSiku(a, t) {
    this.luas = (1 / 2) * a * t;
    this.keliling = a + t + sqrt(a * a + t * t);
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  hitungLingkaran(r) {
    this.luas = Math.PI * r * r;
    this.keliling = 2 * Math.PI * r;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }
}
