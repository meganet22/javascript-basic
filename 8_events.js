Olaylar 
HTML elementleri üzerlerinde bir işlem gerçekleştiğinde bunu  bildirmek için olaylar tetiklerler. 
Örneğin bir düğmeye tıklanması,  klavyeden bir tuşa basılması,sayfanın içeriğinin yüklenmesi gibi  durumlar elementlerin tetiklediği olaylar tarafından JS’ye bildirilir.  JS bu olaylara tepki verecek şekilde programlanabilir. 
Buamaçla elementlerin sağladığı olaylara JS fonksiyonları bağlanır. 
Örnek onclick, onload 
1 <p id=”paragraf”></p>
2 <script>
3 function tiklandi(){
4 document.getElementById(“paragraf”).innerHTML=”düğmeye tıklandı”;
5 }
6 </script>
7 <button id=”dugme” onclick=”tiklandi()”>Tıkla</button>


HTML
<h1 id="baslik"></h1>
Script
window.onload = mesajyaz;


-
window.onload = basla;
function basla()
{
  document.getElementById("yonlendir").onclick = clickHandler;
}

function clickHandler()
{
  alert("hata oluştu!!");
  return false;
}

-
  

Javascript’te HTML DOM’un sağladığı olaylardan hangisi kullanıcının klavyeden bir tuşa basması anında tetiklenmeyi sağlar =  onkeydown

mouseleave: Farenin elementin üzerinden ayrılması Klavye Olayları keypress: Kullanıcının klavyeden bir tuşa basarak elini çekmesi 

keydown: Kullanıcının klavye tuşuna basması keyup: Kullanıcının klavye tuşundan elini çekmesi Form Olayları 

submit: Formun submit düğmesi ile gönderilmesi 

change: Bir elementin değerinin değişmesi 

focus: Bir elementin klavye odağına alınması 

blur: Klavye odağının elementten ayrılması Pencere Olayları 

load: Bir elementin tüm alt elementlerinin yüklenmesinin tamamlanması 

resize: Tarayıcı penceresinin boyutlandırılması 

unload: Pencerenin farklı bir internet adresine gitmesi 

