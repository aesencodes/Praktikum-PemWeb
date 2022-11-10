const bil = prompt("Masukkan Angka");

if (bil <= 0 && bil <= 20) {
  if (bil % 2 != 0) {
    function fibo(bil) {
      if (bil <= 1) {
        return [0, 1];
      }
      let hasil = fibo(bil - 1);
      hasil.push(hasil[hasil.length - 1] + hasil[hasil.length - 2]);
      return hasil;
    }
    prompt(fibo(bil));
  } else {
    function faktorial(bil) {
      var angka = 1;
      var faktor = 1;
      while (angka <= bil) {
        faktor = faktor * angka;
        angka = angka + 1;
      }
      prompt(faktor);
    }
    prompt(faktorial(bil));
  }
} else {
  alert("Error!");
}
