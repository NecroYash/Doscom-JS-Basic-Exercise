// Perulangan agar permainan dapat diulangi lagi
let ulangi = true;
while( ulangi ){

    // ambil inputan pemain ("Gunting,Batu,Kertas") menggunakan jendela dialog prompt

    var player = ___ ;

    //membuat computer memilih ("Gunting,Batu,Kertas") secara random

    var computer = Math.random(); //fungsi ini mengembalikan nilai bilangan dari 0-1

    //konversi angka random menjadi ("Gunting/Kertas/Batu")

    ___

    // tentukan rules game nya
    // jika sama -> seri
    // gunting vs kertas -> gunting win
    // gunting vs batu -> batu win
    // kertas vs batu -> kertas win

    var hasil = '';

    //gunakan fungsi toLowerCase / toUpperCase untuk mengecek inputan player dan computer

    ___

    // Tampilkan Hasilnya menggunakan dialog jendela alert
    ___('Kamu memilih : '+___+' dan Komputer memilih : '+___+'\nMaka hasilnya : Kamu '+___);

    //Buat jendela dialog untuk mengkonfirmasi apakah pemain ingin bermain kembali
    ulangi = ___('Ingin bermain lagi?')

}

alert('Terima Kasih sudah bermain!')