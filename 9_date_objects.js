s˜ml˜ fonks˜yonun 60 san˜ye sonra çalı°ması ayarlanmı°tır. Daha sonra kontrol edeb˜lmek ˜ç˜n zamanlanmı° görev kontrol de˝˜°ke-n˜ne atanmı°tır. c˜k˜s fonks˜yonu çalı°ması hal˜nde ˜d’s˜ sonuc olan paragrafa “Çıkı° ˜°lem˜ gerçekle°t˜.” mesajını yazmaktadır.
Zamanlanmış görevin iptali için elearTimeout fonksiyonu kullanılır. Öncek˜ örne˝˜m˜zden devam ederek kullanıcının çıkı° 
°lem˜n˜ ˜ptal edeb˜lmes˜ ˜ç˜n b˜r dü˝me sa˝layalım. A°a˝ıdak˜ kodda, üçüncü satırda bu ˜°lem ˜ç˜n kullanıcıya b˜r ˆptal Et dü˝-mes˜ sa˝lanmı°tır.
<p>Uzun süredir işlem yapmadınız. 60 saniye içinde herhangi bir işlem yapmaz-
    sanız hesabınızı korumak için otomatik olarak çıkış yapılacak. Bu işlemi iptal etmek için aşağıdaki düğmeye tıklayınız.</p>
<p id=”sonuc”></p>
<input type=”button” onclick=”iptal()” value=”İptal Et”>
    <script>
  var kontrol=setTimeout(cikis, 60000);   function iptal(){
          clearTimeout(kontrol);
      document.getElementById(“sonuc”).innerHTML=”Çıkma işlemi iptal edildi.”;
       }
  function cikis(){
          // çıkış rutinlerini çalıştır
      document.getElementById(“sonuc”).innerHTML=”Çıkış işlemi gerçekleşti.”;
        }
</script>
İptal Et düğmesine tıklandığında iptal isimli fonksiyon çağırılmaktadır. Zamanlanmış görev beşinci satırda ba°latılarak kontrol de˝˜°ken˜ne atanmı°tır. Kullanıcı İptal Et dü˝mes˜ne 60 san˜ye ˜ç˜nde tıklamaz-sa c˜k˜s fonks˜yonu ça˝ırılarak çıkı° ˜°lemler˜ gerçekle°t˜r˜lecekt˜r. °ptal Et dü˝mes˜n˜n oncl˜ck olayı ˜ptal fonks˜yonunu çalı°tıracak °ek˜lde ayarlanmı°tır. ˜ptal fonks˜yonu ˜ç˜nde yed˜nc˜ satırda kontrol de˝˜°ken˜ne atanmı° zamanlanmı° görev sonlandırılmaktadır. clearT˜meout fonks˜yonuna parametre olarak zamanlan-mı° görev kurulurken atama ˜°lem˜ yapılan de˝˜°ken gönder˜l˜r. Bunun ardından sonuc ˜d’l˜ paragrafa “Çık-ma ˜°lem˜ ˜ptal ed˜ld˜” mesajı yazılmaktadır.
ˆk˜nc˜ zamanlanmı° görev türü, ver˜len kodları bel˜rl˜ zaman aralıklarıyla (ör: her san˜ye) sürekl˜ ˜°let˜r. Bu amaçla setInterval fonks˜yonu kullanılır. Bu fonks˜yona parametre olarak ˜°let˜lecek kodları ˜çeren b˜r fonks˜yon ve m˜l˜san˜ye c˜ns˜nden zaman aralı˝ı ver˜l˜r. Y˜neleme görev˜n˜n kontrol ed˜leb˜lmes˜ ˜ç˜n, gö-rev olu°turulurken b˜r de˝˜°kene aktarılab˜l˜r. Öncek˜ örne˝˜m˜zde kullanıcıya b˜r dü˝meye tıklaması ˜ç˜n 60 san˜ye süre tanımı°tık. Bu örne˝˜m˜z˜ setInterval fonks˜yonu ˜le kullanıcıya dü˝meye tıklamak ˜ç˜n kaç san˜yes˜ kaldı˝ını b˜ld˜recek °ek˜lde gel˜°t˜rel˜m. Bu ˜°lem ˜ç˜n paragraftak˜ mesajımızın ˜ç˜ne kalan sürey˜ b˜ld˜rmek ˜ç˜n b˜r span element˜ olu°turmamız gerek˜yor. Bu element˜n ˜ç˜n˜ her san˜ye y˜nelenen b˜r fonks˜yon ˜le de˝˜°t˜rece˝˜z. Kalan sürey˜ zaman ˜s˜ml˜ b˜r de˝˜°ken ˜le tutab˜l˜r˜z. A°a˝ıda ver˜len kodda, üçüncü satırda bu de˝˜°ken olu°turularak 60 san˜ye de˝er˜ atanmı°tır. 

<p>Uzun süredir işlem yapmadınız. <span id=”zaman”>60</span> saniye içinde
herhangi bir işlem yapmazsanız hesabınızı korumak için otomatik olarak çıkış yapıla-cak. Bu işlemi iptal etmek için aşağıdaki düğmeye tıklayınız.</p>
<script>
      var zaman=60;
  var kontrol = setTimeout(cikis, zaman*1000);   
var kontrol2 = setInterval(yenile, 1000);   
function iptal(){
        clearTimeout(kontrol);     
    clearInterval(kontrol2);
    document.getElementById(“sonuc”).innerHTML=”Çıkma işlemi iptal edildi.”;
      }
  function cikis(){
       // çıkış rutinlerini çalıştır     
      clearInterval(kontrol2);
      document.getElementById(“sonuc”).innerHTML=”Çıkış işlemi gerçekleşti.”;
        }
  function yenile(){
          zaman--;
    document.getElementById(“zaman”).innerHTML=zaman;
        }
</script>
Dördüncü satırda çıkı° ˜°lemler˜n˜ ça˝ıracak zamanlanmı° görev ayarlan-mı°tır. Be°˜nc˜ satırda san˜yede b˜r kez yen˜le fonks˜yonunu ça˝ıran ˜k˜nc˜ za-manlanmı° görev ayarlanmı°tır. 16. satırda ba°layan yen˜le fonks˜yonu zaman de˝˜°ken˜nden 1 çıkartarak mesaj ˜ç˜ndek˜ span alanının ˜ç˜ne yen˜ de˝er˜ yazmaktadır. yen˜le fonks˜yonunu ça˝ıran zamanlanmı° görev˜n senaryomuz-dak˜ ˜k˜ durumda (˜ptal ve çıkı°) da sonlandırılması gerekmekted˜r. Kullanı-cının 60 san˜ye ˜ç˜nde ˆptal Et dü˝mes˜ne basması hal˜nde, sek˜z˜nc˜ satırda kontrol2 de˝˜°ken˜ne atanmı° zamanlanmı° görev clearInterval fonks˜yonu ˜le 
˜	ptal ed˜lmekted˜r. Aks˜ halde, çıkı° yapılması durumunda c˜k˜s fonks˜yonu
˜	ç˜nde 13. satırda zamanlanmı° görev˜m˜z y˜ne ˜ptal ed˜lmekted˜r.

      




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
