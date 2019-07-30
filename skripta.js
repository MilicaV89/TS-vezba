//Zadatak 1
var niz = [1, 2, 3, 4, 5];
var niz2 = niz.map(Math.sqrt);

//Zadatak 2
var zad2Niz = [2, 3, 4];
var zad2Res = zad2Niz.reduce(function(prev, e){
	return prev * e;
}, 1); //1 neutralan element za mnozenje

console.log(zad2Res);

//Zadatak 3
var zad3Res = ['x','y','z'].reduce((x, y) => x + y);
console.log(zad3Res);

//Zadatak 4
var z4n = ['Steve', 'Sally', 'George', 'Gina']
//output: 'Congratulations Steve, Sally, George, Gina!'
var z4r = z4n.reduce(function(pr, el, i, ar){
	if(i == (ar.length - 1)) //Ukoliko je indeks elementa jednak indeksu poslednjeng elementa
		return pr + " " + el + "!"; //na kraj stavi ! umesto ,
	else
		return pr + " " +  el + ","; 
},"Congratulations");

console.log(z4r);

//Zadatak 5
var items = [ 	
				{ name: 'ball', points: 2 },
				{ name: 'coin', points: 3 },
				{ name: 'candy', points: 4}
			];
	
//	output: ["ball", "coin", "candy"]
var z5r = items.map(function(elem){
	return elem.name;
});
console.log(z5r);

//Zadatak 6
var vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
];

/*[ { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
	{ make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 } ] */

var z6r = vehicles.filter(function (el) {
	return el.model.charAt(0) == "C";
});

console.log(z6r);

//Zadatak 7
/*
Napisati funkciju koja prima dva parametra: niz stringova i upit (string). Funkcija treba da vrati novi niz
   stringova ciji elementi sadrze upit u sebi kao podstring. Funkcija treba da bude case insensitive. Koristit
   funkciju filter u implementaciji.
	input niz: ['apple', 'banana', 'grapes', 'mango', 'orange']
	input upit: "Ap" 
	output: ['apple', 'grapes']
*/

var voce = ['Apple', 'banana', 'grapes', 'mango', 'orange'];

var fja = function(niz, str){
	str = str.toLowerCase();
	return niz.filter(function(elem){
		return elem.toLowerCase().indexOf(str) > -1;
	});
};

console.log(fja(voce,"Ap"));

//Zadatak 8
/*8. Kombinovanjem funkcija filter, map i reduce izracunati prosecnu vrednost svih vozila koja su tipa 'suv'.
	input: vehicles
	output: 33399*/

var z8r = vehicles.filter(x => x.type == "suv") //od niz vehicles pravi podniz koji sadrzi samo vozila tipa "suv"
				  .map( x => x.price) //mapiram niz suv vozila na nizo sa njihovim cenama
				  .reduce((prev,next,index, array) => { //nad nizom cena suv vozila vrsim redukciju
				  	return prev + (next/array.length); //asocijativnost (a + b) / c == (a/c) + (b/c)
				  },0);
console.log("Resenje zadatak 8: " + z8r);

//Zadatak 9
var get = R.curry(function(property, object){
	return object[property];
});

console.log("ime", {ime: "Pera", prezime: "Peric"});
var get2 = get("prezime");
console.log(get2({ime: "Pera", prezime: "Peric"}));

//Zadatak 10
var double = R.multiply(2);
console.log(double(23));

//Zadatak 11
var words = R.split(" ");
console.log(words("once upon a time"));

//Zadatak 12
var greater = function(a,b) {
		//Ukoliko je a > b, vrati a u suprotnome vrati b (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
		return a > b ? a : b;
	};

var max = R.reduce(greater, -Infinity);
console.log("Max (9): " + max([1,-3483,9,7,2]));
console.log("Max (-1): " + max([-21,-3483,-2,-1]));

//Zadatak 13
var notEmpty = R.compose(R.not, R.isEmpty);
console.log("Z13 true: " + notEmpty("Pera"));
console.log("Z13 false: " + notEmpty(""));

//Zadatak 14

var avgFun = (function(){//Losije resenje jer na R.reduce ne dozvoljava pristup redukovanom nizu
	var reducer = (prev,next, index, array) => { return prev + (next/array.length); }  
	var comp = R.compose(R.map(x => x.price), R.filter( x => x.type == "suv" ));
	return function(arr) {
		return comp(arr).reduce(reducer, 0);
	}
})(); 
console.log("Zadatak 14: " + avgFun(vehicles));

//Zadatak 15

var articles = [
  {
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  },
  {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }
];

var names = R.map(R.compose(get("name"), get("author")));
console.log(names(articles));

//Zadatak 16
let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];
let deljiviSaTri = n.filter((el) => el % 3 == 0); //Ako nema ostatka kada broj delimo sa 3, tada je broj deljiv sa 3
console.log("Deljivi sa tri: ")
console.log(deljiviSaTri);

let parniPozitivniBrojevi = n.filter((el) => (el % 2 == 0) && el > 0); //broj je paran pozitivan broj ako je deljiv sa dva i ako je veci od nule
console.log("Parni pozitivni brojevi:")
console.log(parniPozitivniBrojevi);

//Zadatak 17
let filmovi = [ 
	{
		id:19404,
		original_title:"दिलवाले दुल्हनिया ले जायेंगे",
		title:"Dilwale Dulhania Le Jayenge",
		release_date:"1995-10-20",
		rating:9.1
	},
	{
		id:278,
		original_title:"The Shawshank Redemption",
		title:"The Shawshank Redemption",
		release_date:"1994-09-23",
		rating:8.6
	},
	{
		id:238,
		original_title:"The Godfather",
		title:"The Godfather",
		release_date:"1972-03-14",
		rating:8.6
	},
	{
		id:372058,
		original_title:"君の名は。",
		title:"Your Name.",
		release_date:"2016-08-26",
		rating:8.6
	},
	{
		id:324857,
		original_title:"Spider-Man: Into the Spider-Verse",
		title:"Spider-Man: Into the Spider-Verse",
		release_date:"2018-12-07",
		rating:8.5
	},
	{
		id:424,
		original_title:"Schindler's List",
		title:"Schindler's List",
		release_date:"1993-12-15",
		rating:8.5
	},
	{
		id:240,
		original_title:"The Godfather: Part II",
		title:"The Godfather: Part II",
		release_date:"1974-12-20",
		rating:8.5
	},
	{
		id:129,
		original_title:"千と千尋の神隠し",
		title:"Spirited Away",
		release_date:"2001-07-20",
		rating:8.5
	},
	{
		id:497,
		original_title:"The Green Mile",
		title:"The Green Mile",
		release_date:"1999-12-10",
		rating:8.4
	},
	{
		id:637,
		original_title:"La vita è bella",
		title:"Life Is Beautiful",
		release_date:"1997-12-20",
		rating:8.4
	}];

let nizTitleova = filmovi.filter((el)=> el.rating > 8.5) //Prvo filtriramo niz objekata, da dobijemo samo objekte ciji rejting je veci od 8.5
						 .map((el) => el.title); //Nakon cega samo izdvajamo svojstvo title kako bi dobili niz stringova
console.log("Nazivi filmova ciji reting je veci od 8.5:");
console.log(nizTitleova);

//Zadatak 18
let nizSkracenihObjekata = filmovi.map((el) => { 
	//Vracamo novi objekat kojem pravimo svojstvo title, i relase_date, sa vrednostima iz elementa niza
	return {title: el.title, release_date: el.release_date}; 
	//Ekvivalentan kod:
	/*let obj = {}
	obj["title"] = el.title;
	obj["release_date"] = el.release_date;
	return obj;*/
});

console.log("Niz skracenih objekata:");
console.log(nizSkracenihObjekata);

//Zadatak 19
//Koristimo matematicku osobinu asocijativnoti kako bi izracunali prosecnu vrednost (odnosno, umesto prvo da sumiramo svaki element pa da podelimo sa duzinom niza)
//u sumu smo stavljali svaki pojedinacni element podeljen sa duzinom niza sto nam daje isti rezultat.
let prosecanRating = filmovi.reduce((prev, current, index, array) => prev + (current.rating / array.length) , 0);
console.log("Prosecan rating: " + prosecanRating)

