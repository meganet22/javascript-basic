Tarih Nesnesi 
JS dilinde tarih işlemlerini gerçekleştirmek için date nesnesi  kullanılır. 

date nesnesi oluşturmak için new anahtar sözcüğü kullanılır.  B

unun ardından nesneninmetotları kullanılarak, tarih nesnesinden  istenen bilgiler çekilebilir. 

Aşağıda verilen kodda, ikinci satırda bir  date nesnesi oluşturularak tarih değişkenine atanmaktadır.

Üçüncü  satırda getMinutes metotları ile saat çekilmektedir. 

Bu bilgiler  tarayıcı konsoluna mesaj olarak yazdırılmaktadır. 


date nesnesinin  getHours veya getMinutes bilgileri ise 
Tarih Nesnesi
JS d˜l˜nde tar˜h ˜°lemler˜n˜ gerçekle°t˜rmek ˜ç˜n date nesnes˜ kullanılır. date nesnes˜ olu°turmak ˜ç˜n new anahtar sözcü˝ü kullanılır. Bunun ardından nesnen˜n metotları kullanılarak, tar˜h nesnes˜nden ˜stenen b˜lg˜ler çek˜leb˜l˜r. A°a˝ıda ver˜len kodda, ˜k˜nc˜ satırda b˜r date nesnes˜ olu°turularak tar˜h de˝˜°ken˜ne atanmaktadır. Üçüncü satırda ˜se date nesnes˜n˜n getHours ve getM˜nutes metotları ˜le saat ve dak˜ka b˜lg˜-ler˜ çek˜lmekted˜r. Bu b˜lg˜ler tarayıcı konsoluna mesaj olarak yazdırılmaktadır.

<script>
    var tarih = new Date();
  console.log(tarih.getHours() + “:” + tarih.getMinutes());
</script>
date nesnes˜ parametre ver˜lmeden olu°turuldu˝unda, kullanıcı b˜lg˜sayarının s˜stem saat˜nden yararla-nılarak güncel tar˜h b˜lg˜s˜ olu°turur. date nesnes˜ bel˜rl˜ b˜r zaman noktası ver˜lerek de olu°turulab˜l˜r. Bu amaçla a°a˝ıdak˜ kod kullanılır. Bu formatta ˆng˜l˜zce olarak ay b˜lg˜s˜ (January), gün b˜lg˜s˜, yıl b˜lg˜s˜ ve saat b˜lg˜s˜ ver˜l˜r. A°a˝ıdak˜ örnekte 12 Ocak 2014 tar˜h˜nde, 11:13 saat˜nde b˜r nesne olu°turulmaktadır.
1 <script>
    var tarih = new Date(“January 12, 2014 11:13:00”);
3 </script>
date nesnes˜ olu°turulduktan sonra metotları kullanılarak nesneden b˜lg˜ alınab˜l˜r. Tablo 4.11’de bu metotlar açıklanarak yukarıda olu°turdu˝umuz tar˜h noktası ˜le (12 Ocak 2014, 11:13:00) çev˜recekler˜ sonuçlar örneklenm˜°t˜r.

getDate() Ayın kaçıncı günü (1-31)  tar˜h.getDate() 12
getDay()  Haftanın kaçıncı günü (0 Pazar günü olmak üzere 0-6)  tar˜h.getDay()  0
getFullYear() Hang˜ yıl tar˜h.getFullYear() 2014
getHours()  Saat kaç  tar˜h.getHours()  11
getM˜ll˜seconds()   Kaçıncı m˜l˜san˜ye    tar˜h.getM˜ll˜seconds()   0
getM˜nutes()  Kaçıncı dak˜ka  tar˜h.getM˜nutes()  13
getMonth()  Hang˜ ay (0 Ocak olmak üzere 0-11)  tar˜h.getMonth()  0
getSeconds()  Kaçıncı san˜ye  tar˜h.getSeconds()  0
getT˜me() 1 Ocak 1970, 00:00’dan ber˜ geçen m˜l˜san˜ye sayısı tar˜h.getT˜me() 1389517980000
