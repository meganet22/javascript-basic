let sepet = [
 {
   urunAd : "Süt",
   fiyat : 25,
   adet : 3,
   hediyePuan : 2
 },
 {
   urunAd : "Ketçap",
   fiyat : 35,
   adet : 2,
   hediyePuan : 3
 },
 {
   urunAd : "Mayonez",
   fiyat : 30,
   adet : 5,
   hediyePuan : 1
 },
 {
   urunAd : "Yumurta",
   fiyat : 2,
   adet : 15,
   hediyePuan : 0.5
 }
];

let toplamSepet = sepet.length;   

function sepetBilgi( diziUrun ){
  for(let bilgi of diziUrun){
    console.log("Toplam Ürün : " + toplamSepet);
    console.log(bilgi.urunAd + " : " + (bilgi.fiyat * bilgi.adet) + " TL ");
    console.log("Puan : " + bilgi.hediyePuan);
  }
}

sepetBilgi(sepet);


-------------------------------------------------

let sayilar = [48, 99, 50, 40, 294, 287, 32, 64, 85, 21];

function tekSayilar( dizi ){
  for(let sayi of dizi) {
    if(sayi % 2 === 1) console.log(sayi);
  }
}

tekSayilar(sayilar);

-----------------------------------------------------

let sayilar = [25, 14, 24, 38, 200, 300, 68, 45, 19, 10];

sayilar.forEach((deger)=>{
  if(deger % 2 === 0 ) console.log(deger);
});

