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
