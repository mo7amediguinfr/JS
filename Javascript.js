document.write("Hello!");
var prenom, adresse, taille;
prenom="Mohamed";
adresse="Bouitate";
taille=1.72;
document.write(adresse);
var nom=" Iguinfr";
document.write(nom);
var prenom="Mohamed";
var age=23;
var marocain=true;
document.write(typeof(prenom));
document.write(typeof(age));
document.write(typeof(marocain));
document.write(typeof(maro));
var age=25; //variable globale
function Afficher(){
    var prenomm="khalid"; //variable locale
    document.write(prenomm);
    document.write(age); //un variable globale peut être utilisée dans une fonction
    document.write(typeof(prenomm));
}
Afficher();
document.write(typeof(prenomm)); //un variable locale est indéfinie à l'exterieur de la fonction
// document.write(typeof(prenomm)); //hna ghadi itl3 undefined hiatch had l variable makikhdmch bra l fonction
// document.write(age); //hada ghaykhdm hit variable globale i9d ikhdm lina bra l fonction
// document.write(typeof(age));
var _1one="one";
var Nom,nom;
Nom="EL";
nom="Bahja";
document.write(nom);
var num1=10;
var num2=5;
resultat=num1+num2;
document.write(resultat);
var num1=10;
var num2=5;
resultat=num1-num2;
document.write(resultat);
var num1=10;
var num2=5;
resultat=num1*num2;
document.write(resultat);
var num1=6;
var num2=2;
resultat=num1/num2;
document.write(resultat);
var num1=10;
var num2=5;
resultat=num1%num2;
document.write(resultat);
var num1=17;
var num2=5;
resultat=num1%num2;
document.write(resultat);
var num1=10;
var num2=6;
resultat=num1%num2;
document.write(resultat);
var num1=20;
var num2=5;
resultat=++num1;
document.write(resultat);
var num1=13;
var num2=5;
resultat=--num1;
document.write(resultat);
var num1=7;
var num2=5;
resultat=num1--;
document.write(resultat);
resultat=num1--; //mnin kadir -- ela lisr khas hta it3awd l variable ead katkhdm
document.write(resultat);
var a=10;
var b=5;
resultat=a==b;
document.write(resultat);
var a=10;
var b=10;
resultat=a==b;
document.write(resultat);
var a=10;
var b=5;
resultat=a!=b; //wach a kikhalf b 
document.write(resultat);
var a=10;
var b=10;
resultat=a!=b;
document.write(resultat);
var a=10;
var b=5;
resultat=a>b;
document.write(resultat);
var a=10;
var b=7;
resultat=a<b;
document.write(resultat);
var a=10
var b=5;
resultat=a>=b;
document.write(resultat);
var a=15;
var b=5;
resultat=a<=b;
document.write(resultat);
var a=10;
var b="10";
resultat=a==b;
document.write(resultat);
var a=10;
var b="10";
resultat=a===b;
document.write(resultat);
var a="10";
var b="10";
resultat=a===b;
document.write(resultat);
var a="10";
var b="11";
resultat=a===b;
document.write(resultat);
var a="10";
var b="11";
resultat=a!==b; //wach a kikhalf b 
document.write(resultat);
var a=10;
var b="10";
resultat=a!==b;
document.write(resultat);
var a="10";
var b="10";
resultat=a!==b;
document.write(resultat);
var a=true;
var b=false;
resultat=a&&b; // hna khas ikunu bjuj true bach tl3 true
document.write(resultat);
var a=true;
var b=true;
resultat=a&&b;
document.write(resultat);
var a=true;
var b=false;
var c=true;
resultat=a&&b&&c;
document.write(resultat);
var a=true;
var b=false;
resultat=a||b; //hna khas ikun ghi wahd true bach ikun endi true
document.write(resultat);
var a=false;
var b=true;
var c=false;
var d=false
resultat=a||b||c||d;
document.write(resultat);
var a=false;
var b=false;
resultat=a||b;
document.write(resultat);
var a=true;
var b=false;
resultat=!(a||b); //hna katglb natija 
document.write(resultat);
var a=true;
var b=false;
resultat=!(a&&b);
document.write(resultat);
var a=5; //  101
var b=9; // 1001
         // 0001
resultat=a&b;
document.write(resultat);
// var a=7; // 111
// var b=3; // 101
//          // 010    //TO BE BAck
// resultat=!(a&b);
// document.write(resultat);
var a=5;  // 101
var b=9; // 1001
        //  1101 //hadi katsawi 13
resultat=a|b;
document.write(resultat);
// var a=5; // 101
// var b=9; //1001
//         // 0010
// resultat=!(a|b);
// document.write(resultat);
var a=5;  //1010
var b=13; //1101
resultat=(a<<1); //hna l3adad dial a kanzidu lih 0 ela lisr
document.write(resultat);
var a=5; // 10100 
var b=13;//  1101
resultat=(a<<2); //hna kanzidu lih juj asfar
document.write(resultat);
var a=5;  //   101
var b=13; // 11010
resultat=(b<<1);
document.write(resultat);
var a=13; //1101
var b=5; //  101
resultat=(a>>3); //hna kan9su 3 dl2ar9am ela lisr
document.write(resultat +"<br/>");
var a=6; // 110
var b=13;//1101
        // 1011
resultat=(a^b); //hna ila kant true false kat3ti true ula false true kat3ti true u ila kant true true kat3ti false u ila kant false false kat3ti false
document.write(resultat);
var a=5; // 101
var b=9; //1001
        // 1100
resultat=(a^b);
document.write(resultat);
var a=5; //101
var b=13;//1101
resultat=(~a); //hna 5 ghaytzad elih wahd u ghyawli salib
document.write(resultat);
var a=5; // 101
var b=13;//1101
        //  110
resultat=(b>>>1); //hna ghadi i7yd juj ar9am ela lisr u ghayzid 0 
document.write(resultat);
// var a=5; // 101
// var b=13;//1101
//         // 1100 //To see it later
//         //  110
// resultat=(b>>>2);
// document.write(resultat);
var a=5;
a=a+2;
document.write(a);
a=5;
a+=2;
document.write(a);
a=13;
a-=3;
document.write(a);
a=7;
a*=2;
document.write(a);
a=20;
a/=2;
document.write(a);
a=16;
a%=3;
document.write(a);
var a= (10>5) ? "vrai" : "faux"
document.write(a);
var a=(10==="10") ? "vrai" : "faux"
document.write(a);
var a=(typeof(10)=="number")? "vrai" :"faux";
document.write(a);
var a=(typeof("10")=="string")? "vrai" : "faux"
document.write(a);
if(true){
    document.write("Mohamed")
}
if(10<2){
    document.write("Ah");
}else{
    document.write("lla");
};
var age=19;
if(age>=18){
    document.write("You are allowed to drive a car");
}else{
    document.write("You are not allowed to drive a car");
};
var mark="7";
if(mark=="A"){
    document.write("Good job keep it up!");
}else if(mark=="B"){
    document.write("That's not bad");
}else if(mark=="C"){
    document.write("You better work harder");
}else if(mark=="D"){
    document.write("Uh-Oh!");
}else{
    document.write("I have no idea what that mean");
};
var a=10;
var b=5;
var operation="div";
switch(operation){
    case "add":
        resultat=a+b;
    break;
    case "sub":
        resultat=a-b;
    break;
    default:
        resultat="This is not a valid operation";
    break;
    case "div":
        resultat=a/b;
    break;
}
document.write(resultat +"<br/>");
var a=5;
var counter=0;
while(counter<=10){
    document.write(a+"x"+counter+"="+a*counter+"<br/>");
    counter++;
}
i=0;
do{
    document.write(i++ +"<br/>"); //hna i ghayb9a itzad ma7d i<10
}while(i<10);


for(i=0; i<5;i++){
    document.write(i+"<br/>");
}

for(i=10; i>0; i--){
    document.write(i+"<br/>");
}

for(i=20;i<30;i++){
    document.write(i+"<br/>");
}

var client=["Mohamed","Iguinfr",23]; //c'est un array
var language=new Array("javascript","jQuery"); //autre method pour déclarer un array
// alert(client[0]);
// alert(language[0]);
// document.write(client[0]);
document.write(client);
document.getElementById("liste").innerHTML=client;
document.getElementById("liste1").innerHTML=language;
var client1={prenom:"Mohamed",nom:"Iguinfr",age:"23",local:"Rabat"}; //c'est un object
language.push("Css","Html");
// To know if array is array f console kanktkb intanceof Array client
var place="ODC";
//bach n3rf wach array kanktb f console language.constructor === Array
function isArray(variable){
    return variable.constructor.toString().indexOf("Array")>-1;
}
function bienvenue(){
    alert("Salut!");
}
bienvenue();
function right(){
    document.write("Ktaba");
}
right();
function Bienvenue(prenom){
    prenom="Khalid";
    alert("Salut "+prenom+" !");
}
Bienvenue();
function BIenvenue(prenom){
    alert("Salut "+prenom+" !");
}
BIenvenue("User");

function BIEnvenue(prenom,nom){
    alert("Salut "+prenom+" "+nom+" !");
}
BIEnvenue("Adil","El Bahja");

function connexion(motDePass){
    if(motDePass==123){
        connecte();
    }else{
        erreur();
    }
}
function connecte(){
    alert("Vous êtes connectés!");
};
function erreur(){
    alert("Mot de passe incorrect");
};
connexion(123);
// window.alert("Hyy");
// window.prompt("Hola");
// window.confirm("Continue?");
function salut(){
    nom=prompt("Donnez Votre nom");
    alert("Salut "+nom+" !");
};
salut();
function continuez(){
    a=confirm("Voulez-vous afficher le site web?");
    if(a==true){
        document.write("Afficher le site");
    }else{
        document.write("Retour");
    }
}
continuez();

var client2=["Alex","Shelby",7];
// client2.shift();
client2.unshift("one"); //hna ghadi tzad one f lwl
client2.pop();// hadi kat7yd akhir element f l array
client2.shift();// hna ghadi t7yd awal element f array li huwa one li zdt b unshift
var days=["Monday","Tuesday","Wednesday","Thursday","Friday"];
delete days[2]; // hna ghadi tms7 Wednesday

const division=100/2;
document.write(division);
const firstName="Luke";
const lastName="Skywalker";
const name=firstName+" "+lastName;
document.write(name);
function hello(){
    return "Hello world"; 
}
const turtles=["Raphael","Michelangelo","Leonardo","Donatello"];
function turtlePower(turtles){
    return turtles[2];
}
const spacies=["Alex","Clover","Sam"];
function totaly(spacies){
    return spacies[2]
};
const numbers=[1,4,6,8,0];
numbers[1]=88; //hna ghadi nbdl 4 b 88
const movies=["The matrix","Se7en","The Wizard of Oz","Marry Poppins"];
function getLength(movies){
    return movies.length;
};
const person1={firstName:"Daenerys",lastName:"Targaryen",email:"dragonlady@gmail.com"};
function getLastName(person1){
    return person1.lastName;
};
function getEmail(person1){
    return person1.email;
};
const Numbers=[1,4,9,16];
function darb(Numbers){
    return Numbers.map(x=>x*2);
};
function na9is(Numbers){
    return Numbers.map(x=>x-2);
};
const words=["thaw","achievement","gain","outlet","difference"];
function fiveCharacther(words){
    return words.filter(word=>word.length<5); //haid bach trd ay klma fiha 9L mn 5 dl2a7ruf
};
const years=[1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020];
function akbar3am(years){
    return years.filter(year=>year>1950); //hadi bach trd akbar 3am mn 1950
};
const e=5;
const f=10;
function add(e,f){
    return e+f;
};
const minutes=5;
function convert(minutes){
    return minutes*60;
};
const side1=10;
const side2=8;
function nextEdge(side1,side2){
    return (side1+side2);
};
var a="mohamed ";
b="Iguinfr";
document.write(a+b);
const str1="Hello";
const str2="World";
console.log(str1.concat(" ",str2));
const smya="Mohamed";
const knya="Iguinfr";
console.log(smya.concat(" ",knya));
console.log(knya.concat(", ",smya));
const A="is better than nothing";
function addSomething(A){
   return "something".concat(" ",A);
};
const hour=2;
function converthour(hour){
    return hour*60*60;
};
const Age=20;
function chehalMnNhar(Age){
    return Age*365;
};
console.log(4+5);
console.log(Math.pow(7,3));
const x=5;
function squared(x){
    return Math.pow(x,2); //hna ghadi dir 5 oss 2
};
console.log(Math.min(3,2,1));
console.log(Math.min(-4,1,-7));
const array1=[2,0,1];
console.log(Math.min(...array1));
// const ar9am=15;20;100;
// console.log((Math.min(ar9am)));
// const array2=[100,80,20];
// const array3=[200,10];
// function canNest(array2,array3){
//     if(Math.min(...array2)>Math.min(...array3)){
//         return true;
//     } else if(Math.max(...array2)<Math.max(...array3)){
//         return false;
//     }
// }
const arr1=[100,80,20];
const arr2=[200,10];
function caNest(arr1,arr2){
    return(Math.min(...arr1)>Math.min(...arr2)&&Math.max(...arr1)<Math.max(...arr2)); //hna khas ikunu bjujhum true bach trj3 true
}
var a=5;
var b=2;
resultat=a**b;
document.write(resultat+" ");
const arr3=[2,7,10];
function minmax(arr3){
    return [Math.min(...arr3),Math.max(...arr3)] //hna bach nrj3 l min value u l max value
};
// let tld ="Com Net Org Info Code Io"
// let tldRe=/(org|info|io)/i; //hna glt lih ijiya ya org wlla info wlla io
// console.log(tld.match(tldRe));
// let tld2="Mozilla Chrome Safari IE";
// let tldRe2=/(mozilla|safari|Chrome)/i; // dik l i li zdt z3ma maydihach f capital letters
// console.log(tld2.match(tldRe2));
var a=2;
resultat=a**3;
document.write(resultat);
var a=document.querySelector('h1');
console.log(a);
// var a=document.querySelector('h1');
// console.log(a);