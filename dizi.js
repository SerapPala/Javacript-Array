

//--/ Dizi ( Array ) Oluşturmak  /--/
let domain = "serappala.com"
let isActive = false
let items = [13, 25, 37, isActive, domain]
console.log(items) //consol ekranına items yazarak array içerisindekileri görebiliriz.
//boş liste oluşturmak için(ör:bir form var formdan gelen bilgileri buraya ekliyor olabilirim);
let emptyArray = []
//Array içerisindeki eleman sayısını öğrenme
console.log(items.length)
document.querySelector('#info').innerHTML = items.length
//Array içerisindeki ilk elemana ulaşmak
console.log(items [0] )
//Array içerisindeki ortadaki elemana ulaşmak
console.log(items [ Math.floor(items.length / 2 ) ] )
//Array içerisindeki son elemana ulaşmak
console.log(items [items.length - 1] )
//Değişken  içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log( typeof(items) )//object olarak cıktı verir.
console.log( Array.isArray(items) )
// Hangileri isArray -> true verir?
console.log( " [] :", Array.isArray ( [] ) )
console.log( "1 :", Array.isArray ( 1 ) )
console.log( "true :", Array.isArray ( true ) )
// Array içerisindeki bir ogenin bilgisini değiştirme (ilki)
items[0] = 5;
console.log(items)
// Array içerisindeki bir ogenin bilgisini değiştirme (sonuncu)
items[items.length - 1] = 1000;
console.log(items) 
// Array içerisindeki bir ogenin bilgisini değiştirme (1000.)
items[1000] = 1000;
console.log(items) 


//--/ Dizi (Array) Liste ile alakalı işlemler  /--/
items.push( 50 )
console.log ("50 : " , items)
// Array: sona oge/eleman eklemek -> push

items.unshift( 5 )
console.log ("5 : " , items)
// Array: başa oge/eleman eklemek -> unshift

let lastItem= items.pop()//son elemanı değişken içerisine ekledim.
console.log ("lastItem: " , lastItem , ", items: " , items)
// Array: sondaki oge/elemanı çıkarmak -> pop

let firstItem= items.shift()
console.log ("firstItem: " , firstItem , ", items: " , items)
// Array: baştaki oge/elemanı çıkarmak -> shift


//--/ Array Methodlarının Kullanımı ve Array içerisinde array oluşturma /--/ 
let  icerisindekiler = [ 1, 2, 3, 4, 5 ]

let femaleUsers = ["Ayse", "Fatma", "Hayriye"]
let maleUsers = ["Ahmet", "Mehmet", "Osman"]

//dizinin başına eleman ekledim
icerisindekiler.unshift(femaleUsers)
console.log(icerisindekiler)

//dizinin sonuna eleman ekledim
icerisindekiler.push(maleUsers)
console.log(icerisindekiler)

console.log(icerisindekiler.length)
console.log(icerisindekiler[0].length) // array içerisindeki istediğim Array'in length bilgisini aldım.
console.log(icerisindekiler[0] [0].length) // Ayşe bilgisine ulaştım

//Array içerisinden oge ayırmak -> splice (pos, item?)
let yeniicerisindekiler = icerisindekiler.splice(3, 5)
console.log("yeniicerisindekiler : ", yeniicerisindekiler)
console.log("icerisindekiler : ", icerisindekiler)

// Array içerisindeki ogenin index bilgisini bulma
icerisindekiler.unshift("lorem") //başına ekle
icerisindekiler.push("ipsum") // sonuna ekle
console.log ( icerisindekiler [icerisindekiler.indexOf("ipsum") ] )

// Array Kopyalamak -> slice, [...ES6]
let kopyaIcerisindekiler = icerisindekiler
console.log(icerisindekiler)

copyItems.pop() // son ogeyi cikarttik
console.log("kopyaIcerisindekiler :", kopyaIcerisindekiler)
console.log("icerisindekiler :", icerisindekiler)

console.log("kopyalandiktan sonraki hali:")
kopyaIcerisindekiler = items.slice() // kopyalama yapti
kopyaIcerisindekiler.pop() // son ogeyi cikarttik
console.log("kopyaIcerisindekiler : ", kopyaIcerisindekiler)
console.log("icerisindekiler :", icerisindekiler)

let es6Items = [...icerisindekiler] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)



// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)
