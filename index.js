class BangunDatar {
  constructor(luas, keliling) {
    this.luas = luas;
    this.keliling = keliling;
  }

  persegi(s) {
    this.luas = s * s;
    this.keliling = 4 * s;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  persegiPanjang(p, l) {
    this.luas = p * l;
    this.keliling = 2 * p + 2 * l;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  segitigaSiku2(a, t) {
    this.luas = (1 / 2) * a * t;
    this.keliling = a + t + sqrt(a * a + t * t);
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }

  lingkarang(r) {
    this.luas = Math.PI * r * r;
    this.keliling = 2 * Math.PI * r;
    return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
  }
}
