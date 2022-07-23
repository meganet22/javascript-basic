Dizilerle çalışırken kullanılabilecek önemli metotlardan biri olan shift in görevi aşağıdakilerden hangisinde doğru verilmiştir?

Dizideki ilk elemanı çıkarır.

Push metodu, dizinin sonuna yeni eleman ekler. 
<script>
    var meyveler=[“Ayva”, “Elma”, “Armut”];   
    var sayilar=[10, 20, 30, 40];
</script>
<script>
    meyveler.push(“Kiraz”);
</script>
Diziye değer eklemenin başka bir yolu da kullanılmayan bir indise atama yapmaktır. Örneğin, meyveler
dizisinde dört meyve olduğunu düşünelim. Bu nedenle meyveler dizisindeki en yüksek tanımlı indis
üçtür. Meyveler dizine yeni bir element eklemek için, kullanılmayan ilk indis olan dördü kullanabiliriz
 <script>
    meyveler[4] = “Şeftali”;
 </script>

Metot
toString   Dizi İçeriğini metin olarak verir	console.log(meyveler.toString());
push    Dizinin sonuna yeni eleman ekler	meyveler.push(“Kiraz”);
pop   Dizideki son elemanı çıkarır	son_meyve=meyveler.pop();
shift   dizideki ilk elemanı çıkarır	ilk_meyve=meyveler.shift();
delete    diziden verilen indisli elemanı siler	delete meyveler[3];
splice    diziden verilen indisten itibaren verilen sayı kadar eleman siler, verilen elemanları araya ekler	meyveler.splice(1,2, “Mango”);
concat    iki diziyi birleştirir	birleşim=meyveler.concat(sebzeler);
slice   verilen indisten itibaren verilen sayı kadar elemanı kopyalar	meyveler2=meyveler.slice(1,2);
sort    diziyi sıralar	meyveler=meyveler.sort();

Dizi Metotlarının Örneklenmesi
var meyveler=[“elma”, “armut”, “portakal”];	meyveler d˜z˜s˜ tanımlanıyor.
var meyveler2=[“muz”, “kavun”, “mandal˜na”];	meyveler 2 d˜z˜s˜ tanılanıyor.
meyveler.push(“karpuz”);	meyveler d˜z˜s˜n˜n sonuna karpuz elemanı eklen˜yor
meyveler: elma, armut, portakal, karpuz
meyvem=meyveler.pop();	meyveler d˜z˜s˜nden son element çıkarılıyor ve meyvem de°˜˙ken˜ne gönder˜l˜yor
meyvem: karpuz
meyveler: elma, armut, portakal
meyvem=meyveler.sh˜ft();	meyveler d˜z˜s˜nden ˜lk eleman çıkarılıyor ve meyvem de°˜˙ken˜ne gönder˜l˜yor
meyvem: elma	
meyveler: armut, portakal
delete meyveler[0];	meyveler d˜z˜s˜ndek˜ 0 ˜nd˜sl˜ element˜n ˜ç˜ bo˙altılıyor, fakat bu elaman s˜l˜nm˜yor
meyveler: ,portakal
meyveler[0]=”armut”;	meyveler d˜z˜s˜ndek˜ 0 ˜nd˜sl˜ elemana armut de°er˜ atanıyor
meyveler: armut, portakal	
meyveler.spl˜ce(0,1);	meyveler d˜z˜s˜nden sıfırıncı ˜nd˜sten ˜t˜baren b˜r eleman s˜l˜n˜yor, eleman eklenm˜yor
meyveler: portakal
meyveler=meyveler.concat(meyveler2);	meyveler ve meyveler2 d˜z˜ler˜ b˜rle˙t˜r˜lerek meyveler de°˜˙ken˜ne atanıyor.
meyveler: portakal, muz, kavun, mandal˜na	
meyveler.spl˜ce(1,0, “elma”);	meyveler d˜z˜s˜nde 1 numaralı ˜nd˜sten ˜t˜baren element s˜l˜nmeden araya elma elemanı eklen˜yor
meyveler: portakal, elma, muz, kavun, mandal˜na
meyveler.sort();	meyveler d˜z˜s˜n˜n ˜çer˜°˜ sıralanıyor
meyveler: elma, kavun, mandal˜na, muz, portakal
var meyveler3=meyveler.sl˜ce(1,3);	meyveler d˜z˜s˜nden 1 ˜nd˜sl˜ elementten ˜t˜baren 3 nd˜sl˜ elemente kadar tüm elemanlar kopyalanarak meyveler3 de°˜˙ken˜ne gönder˜l˜yor
meyveler: elma, kavun, mandal˜na, muz, portakal meyveler3: kavun, mandal˜na, muz


Pop dizideki son elemanı çıkarır. 
Delete diziden verilen indisli elemanı siler. 
Concat iki diziyi birleştirir. 

shift dizideki ilk elemanı çıkarır. 

arabalar = new Array();

arabalar[0]="a";

arabalar[1]="b";

var arabalar = new Array ("a", "b");

var arabalar = ["a","b"];

arabalar [0] = "c";

Diziler aynı anda birden fazla değeri tutabilir
