// var a=document.querySelector('h1');
// a.style.color="red";
document.querySelector('h1').style.color="yellow";
document.write('Hello world');
document.write('<h1>Hello world2(ktbtha b js)</h1>');
console.log('Hello');
console.error('This is an error');
// print(); //hadi kat7l lia l impriment f navigateur
window.document.write('Hello world3 '+'<br />');
document.write(typeof ('Salam')+" ");
document.write(typeof(10.1));
document.write(10+5);
document.write('10'+'5'); 
let x;
document.write(typeof(x));
document.write(typeof(null)); //type dial null hya object
let person={firstName:'John',lastName:'Doe',age:50,eyeColor:'green'};
person=null; //hna wakha rdit person null wlkin ra mzl object hitach null object
var name='Ali';
console.log(name);
var name="First";
console.log(name);
console.log(name);
console.log(name);
var a=5;
a=10;
let b;
b=20;
const c=30; //  had leiba f const makatkhdmch 
// c=35; //hitach const tabtba maymknch n3tiha 9ima jdida 
console.log(a);
console.log(b);
console.log(c);
var name='abdelrahman ';
var age=26;
console.log(name+age);
console.log(`my name is ${name} and my age is ${age}`)
const smya="Mohamed";
const knya="Iguinfr";
console.log(smya.concat(" ",knya));
console.log('10 '+5);
var num1=5;
var num2=4;
console.log(num1**num2);
console.log(num1+num2);
console.log('num1'-num2)
var num=10;
num1=num+1;
console.log(num1);
var num=5;
num+=20;
console.log(num);
var num=8;
num++;
console.log(num);
var num=12;
console.log(++num);
var num=20;
console.log(num++);
console.log(num);
console.log('5'-'4');
console.log('1'-'2');
console.log('20'*'2');
console.log('5'/'Ahmed'); //NaN
document.write(typeof(NaN));
console.log('5'+'Ahmed')
console.log('5'+'7');
console.log(+'5'+ +'7');
console.log(typeof(+'5'));
console.log(+'5');
console.log(-'5');
console.log(-'-5');
console.log(+'ahmed'); //NaN and NaN is a number
console.log(+true);
console.log(+false);
console.log(typeof(undefined));
console.log(undefined);
console.log(+undefined);
console.log(+null) //null rditha ra9m
console.log(-'5'-'7');
console.log(-null);
console.log('4');
console.log(+'4')
console.log('10');
console.log(Number('10')+Number('7'));
console.log(typeof(Number('5'))); //hna 5 ghadi twli number
console.log(Number('4 abdelrahman'));
console.log(parseInt('4 abdelrahman')); // hna parseInt ghadi thyd lktaba u tkhlii ra9m 4
console.log(parseInt('test 4 abdelrahman')); //hna paresInt kathyd gha ra9m ila kan f lwl fach jat ktaba ead ra9m ma7ydhach
console.log(Number('4.5'));
console.log(parseInt('4.5')); //hna parseInt makatrdch l float number eadi ghatrj3 rb3a
console.log(parseFloat('4.5')); //hadi kat7wl l number wakha tkun fih fasila
console.log(parseFloat('13'));
// var a=Number;
// console.log(typeof(Number));
console.log(Number.MAX_VALUE); //hna akbar ra9m t9d JS t3aml meah
console.log(Number.MIN_VALUE); //hna asghar ra9m t9d JS t3aml meah
console.log(Number.MAX_VALUE+1987693992);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1.7976931348623157e+308);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(9007199254740991));
var Test=9007199254740991;
console.log(Number.isSafeInteger(Test));
var Test1=1.7976931348623157e+308;
console.log(Number.isSafeInteger(Test1))
var Test2=-9007199254740991;
console.log(Number.isSafeInteger(Test2));
console.log(Number.isSafeInteger(90071992547409911));
console.log(Number.isSafeInteger(-90071992547409911));
console.log(Number.isSafeInteger(10));
console.log(Number.isInteger(4));
console.log(Number.isInteger('4'));
console.log(Number.isNaN('4'));
console.log(Number.isNaN('ahmed'-5));
console.log(Number.isNaN('ahmed'+5)); //hna machi NaN hit ghayjm3 bintahuum
var math=Math.E;
console.log(math);
var math1=Math.PI;
console.log(math1);
var math2=Math.LN10;
console.log(math2);
console.log(Math.abs(-5)); //hna abs katrd ay ra9m salib l mujab
console.log(Math.sqrt(16)); //hna kijib ljadr dial 16
console.log(Math.pow(7,3)); //hna 7 uss 3
console.log(Math.round(10.5)); //hna ghadi t9rb lia l a9rab eadad sa7i7
console.log(Math.round(10.4));
console.log(Math.ceil(10.1)) //hadi kat9rb dghya l eadad l eadad tabi3i
console.log(Math.floor(10.9)); // hna katrj3 l9ima li 9bl
console.log(Math.min(1,2,3));
console.log(Math.min(2,9,-8,10));
console.log(Math.max(12,90,75));
console.log(Math.max(10,200,-14,33));
var zakah=1000;
console.log(zakah*0.025);
var zakah=prompt('Entrez zakah');
document.write(zakah*0.025+' Dhs');
var string=String(10)
console.log(typeof(string)); //hna ghanrd 10 String
console.log(String(7));
var r=100;
console.log(typeof(String(r)));
var f=200;
var toS=f.toString();
console.log(typeof(toS));
var t=400;
console.log(typeof (t.toString()));
var t=700;
console.log(t.toString());
console.log((100).toString());
console.log((100.5).toString());
console.log(100..toString());
var smya1='Mohamed ';
console.log(smya1.repeat(3));
var smya2='Mohamed';
console.log(smya2.length);
var smya3='Mohamed   ';
console.log(smya3.length);
var ra9m=100;
console.log(ra9m.length); //hna ghadi undefined hit 100 katmchi l blassa w7da
var ra9m1='100';
console.log(ra9m1.length);
var smya4='Mohamed';
console.log(smya4[5]) // [] hada huwa l index li fih e f smya Mohamed u kiyakhd ar9am
console.log(smya4[8]);
var smya5='Mohamed';
console.log(smya5.charAt(2));
var smya6='Mohamed';
console.log(smya6[8]); //hna ghatl3 undefined
console.log(smya6.charAt(8)); //hna maghaytl3 waluu
var smya7='Mohamed';
console.log(smya7.indexOf('M'));//hna katl3 lia blast M
var js='I love JavaScript';
console.log(js.indexOf('o'));
var js='i love JavaScript';
console.log(js.indexOf('S'));
console.log(js.indexOf('a'));
console.log(js.indexOf('a',9)); //hna glt lih blli khassu ibda mn l index 9 l7sab
console.log(js.indexOf('Java'));
console.log(js.lastIndexOf('l')); //hna kibda l7sab mn limn kibda mn 17(eadad dial les charachter li kaynin u kib9a ghadi habt)
console.log(js.length);
console.log(js.lastIndexOf('i')); 
console.log(js.lastIndexOf('i',13));
console.log(js.slice(2));
console.log(js.slice(2,11)); //illa drt 11-2 ghat3tini 9 u hya nfs eadad lkalimat li ghayjiwni
var smya8='Mohamed Iguinfr'
console.log(smya8.split()); //hna kan7t smya8 f array
console.log(smya8.split(' ')); //hna ghadi i9t3 mn lmasaffa ' '
console.log(smya8.split('a')); //ghay9t3 mn a u ghadi issipari l array
var smya9='ali gamal hasan karem';
console.log(smya9.split('a'));
var smya10='ali_gamal_hasan_karem'
console.log(smya10.split(' ')); //hna maghaydir walu hit makaynach ' '  
console.log(smya10.split('_'));
console.log(smya10.split('_',2));
console.log(smya10.split('_',3))
console.log(smya10.split(''));
console.log(smya10.split('',2))
var smya11='i love JavaScript';
console.log(smya11.substring(2,6)); // bhalha bhal slice
console.log(smya11.slice(-10));
console.log(smya11.slice(-10,-8));
console.log(smya11.slice(-4,-2));
console.log(smya11.substring(-4,-2)); //hna maghadi i3ti walo hit substring makat9blch negative
console.log(smya11.substr(2,6)); // hna substr katbda Mn index 2 u katbda thsb mnuu hta katwsl l 6
console.log(smya11.indexOf('i',1));
console.log(smya11.includes('a')); //hna katrj3 lik wach dak lhrf li kat9lb elih wach kayn wlla la b true u false
console.log(smya11.includes('z'));
console.log(smya11.indexOf('z')); //hna ghadi tl3 -1 li hya mal9atch l7arf
console.log(smya11.includes('o',4)); //hna ghatbda t9lb mn 4 uhia ghada u maghatl9ach o
console.log(smya11.includes('o',3)); //hna wach lblasa  3 fiha o
console.log(smya11.startsWith('i'));// hna katswlu wach lktaba katbda b i;
console.log(smya11.startsWith('I'));
console.log(smya11.startsWith('l',2));
console.log(smya11.startsWith('o',2));
console.log(smya11.startsWith('o',3));
console.log(smya11.startsWith('love',2));
console.log(smya11.endsWith('t'));
console.log(smya11.endsWith('r'));
console.log(smya11.endsWith('e',6)); //hna wach had 6 dl2ar9am kisaliw b e
console.log(smya11.endsWith('t',17));
console.log(smya11.endsWith('S',12)); 
console.log(smya11.endsWith('c',12));
var names=['ahmed','ali','mazen','omar'];
// console.log(names);
console.log(names[3]);
console.log(names.length);
console.log(names.length-1);
console.log(names[names.length-1]); //hna 4-1 hya 3
var data=[1,2,3,'ahmed',true,null,undefined,null,[1,2,3]]; //n9d nzid array wst mn array
console.log(data);
var data1=[1,2,3,[4,5,6]];
console.log(data1[3]);
console.log(data1[3][1]);
var data2=[1,2,3,[4,5,6,[7,8,9]]];
console.log(data2[3][3][1]);
var names1=['ahmed','ali','mazen'];
names1[0]='Mohamed'; //hna bdlt ahmed b Mohamed
names1[1]='Iguinfr';
names1[2]=23;
console.log(names1);
var names2=['ilyass','khaled','amin'];
names2.push('hamza','moncef'); //hna push katzid dakchi li bghiti f lkhr dial array
names2.unshift('Mohamed'); //hna unshift katzid dakchi li bghiti f lwl dial array
console.log(names2);
var names3=['Windows','Linux','Mac','Dell','HP'];
names3.shift(); //hna ghadi nms7 awal haja li hya  Windows
// names3.shift(); //Hadi ghadi tms7 Linux
console.log(names3.shift()); //hna ghadi tms7 linux u ghadi t3awd tktbuu
console.log(names3);
var names4=['UIDesigner','FrontEnd','BackEnd'];
names4.pop(); //hadi katms7 akhir haja
console.log(names4.pop()); //hna ghadi tms7 lia frontEnd u t3awd tktbha
console.log(names4);
var names5=['amin','souhaib','hassan','reda'];
// names5.splice(0,1);
// names5.splice(1,1);
// names5.splice(0,2);
// names5.splice(0,3); //hna mn index 0 ghaytms7u 3 dl3anasir
// names5.splice(0,4);
names5.splice(1,1); //hna hydt souhaib
names5.splice(0,1,'Mohamed'); //hna hydt amin u zdt f blastu mohamed
names5.splice(1,0,'iguinfr'); //hna glt lih f index 1 zid lia iguinfr
console.log(names5);
var names6=['ahmed','inass','jamal','issam'];
names6.slice(0,3) //hna 9t3t mn ahmed tal jamal
console.log(names6.slice(0,3)); //hna khsni dakchi li drtu ndiru wst console log bach iban lia chnu d rt
console.log(names6);
var names7=['ali','ahmed','mazen','gamal'];
names7.slice(-2) //hna kanbdaw lhsab mn gamal li hya -1 u ghaybda i9t3 ha mn Na9is 2 li hya mazen u ghayb9a endi mazen u gamal
// console.log(names7.slice(-2));
console.log(names7.slice(-3,-1)); //hna glt lih i9t3 mn -3 li hya ahmed tal -1 bach ib9a endi f lkhr ahmed,mazen
console.log(names7);
var names8=['keyboard','mouse','usb'];
console.log(names8[0]);
console.log(names8.indexOf('keyboard')); //hna kan9lb ela blast keyboard
console.log(names8.indexOf('keyboard',1)); //hna glt lih inda i9lb ela keyboard wlkin mn index 1
var names80='teskt';
console.log(names80.indexOf('k'));
var names9=['calculate','opera','chrome','mozilla','opera'];
console.log(names9.indexOf('opera',1));
console.log(names9.indexOf('opera',2));
var names10=['outlook','gmail','hotmail','gmail','yahoo'];
console.log(names10.lastIndexOf('gmail')); //hna kibda i9lb mn lkhr
console.log(names10.lastIndexOf('gmail',2));
console.log(names10.lastIndexOf('yahoo',-1)); //hna ghatbda lhsab mn -1 li huwa akhir index li huwa yahoo u ghatkun blastu hia 4
console.log(names10.includes('outlook'));
console.log(names10.includes('hotmail',2));//hna glt liha wach f lbalssa 2 kayna hotmail u ghadi trj3 lia true
console.log(names10.includes('msn'));
var cities=['Rabat','Marrakech','Fes','Walili'];
console.log(cities.reverse()); //hna l array dial cities ghadi itgl ghaywli badi mn walili
var alphabets=['k','c','a','m'];
console.log(alphabets.sort()); //hna ghadi irtb lia mn lbdia on ordere alphabetique
var numbers=[3,7,2,4];
console.log(numbers.sort()); //hna ghadi irtb lia l2ar9am
var arr1=['vscode','photoshop'];
var arr2=['adobe','illustrator'];
// arr1=arr1+arr2;
// arr1+=arr2;
// console.log(arr1); //hna knt bghit njm3ehum unrdhum array wahd wlkin tjm3u u wlaw string
// console.log(typeof(arr1));
console.log(arr1.concat(arr2)); //hna kanjm3 mabin l array lwlani u tani
var arr3=['btata','khizzu','ma3dnuss','bsla'];
var arr4=['maticha','lbid','lml7a','kamon'];
var arr5=['frite','djaja','monada','chlada'];
console.log(arr3.concat(arr4,arr5,"c'est un plat")); //hna n9dr ndmj ktr bzf dial arrayat un9d nzid meahum ktaba
var smia='mohamed';
var knia='iguinfr';
console.log(smya.concat(' ',knia));
var proce=['intel','nividia','amd','rtx'];
console.log(proce.join()) //hna had l array ghan3rdu l utilisateur ela annhu string
console.log(typeof(proce.join()))
console.log(proce.join(' and ')) //hna blast dik l fasila li kant ktbt and
// console.log(proce); 
var names11='mohamed';
var names12='mohamed';
console.log(names11==names12);
var names13='btata';
var names14='maticha';
console.log(names13==names14);
var m='ahmed';
var n='ali';
var o='hamid';
console.log(m=n=o); //hna glt lih bli m katsawi n katsawi o u ghadi irj3 lia hamid kirj3 akhir haja t3tat lih
var askEmail=prompt('Entrez votre email');
var email='mohamediguinfr@hotmail.com';
if(askEmail.toLowerCase().trim()==email){ //hna kan endi f data email mktubb huruf sghira u illa l user ktb lia email b huruf kbira hna kanrdhum b huruf sghira kima kanu ead kan9arnhum mea l email li kan endi u drt trim bach ila kant chi masafa f dakchi li ktb thyd flwl u la flkhr thyd
    alert('You are login');
}else{
    alert('Email incorrect')
};
console.log(askEmail.toLowerCase()==email);
var smiaa='mohamed';
// console.log(smiaa);
console.log(smiaa.toUpperCase());
var smiaa1='IGUINFR';
console.log(smiaa1.toLowerCase());
var p=' DELL  '
console.log(p.length);
console.log(p.trim().length); //hna hyd lmasafat lkhawyin li kanu zaydin 
var p1='DELL XP';
console.log(p1.length);
console.log(p1.trim().length); //hna makathydch duk les espaces li kikunu lwst katkhlihum 
console.log(5==5); //hna bhal ila glti lih wach 5 katsawi 5 u katrj3 hna true
console.log(5=='5');
console.log(5==='5');
console.log(5=='-5'); //hna ghadi tl3 false
console.log(4>5);
document.write(4<3);
console.log(4<=4);
console.log('4'<=4); //hadi ghatl3 true hit hna kan9arnu gha l9imat
console.log(4!=4);
console.log(4!='4'); //hna ghadi itl3 lia false hitach makitkhalfuch f l9ima
console.log(4!='5'); // hna ghadi tl3 true hit rb3a katkhalf 5 mn nahyet l9ima
let product='TV-Samsung';
let size=50;
let price=10000;
// console.log(price>10000);
console.log(price<12000 && size==50);
let product1='TV-LG';
let size1=40;
let price1=10000;
console.log(price1<12000 && size1==50);
let product2='TV-Siera';
let size2=50;
let price2=10000;
console.log(price2<12000&&size2==50&&product2=='TV-Siera');
var pc='Dell';
var procee='i5';
var taman=30000;
console.log(pc=='kima bghat tkun smia'||procee=='i5'); //hna khas ghi wahd ikun true bach tl3 true
var pc1='HP';
var procce1='i3';
console.log(pc1=='Dell'||procce1=='i5'); //hna tawahd fihum mat79e9 idan ghatl3 false
var a=5; //  101
var y=9; // 1001
         // 0001
result=a&y;
document.write(result);
var a=5;  // 101
var z=9; // 1001
        //  1101
result=a|z;
document.write(result);
var nmra1=5;
var nmra2=10;
if(nmra2>nmra1){
    console.log('Hello world');
    document.write('HELLO');
    alert('HELLO');
};
var nmra3=prompt('nmra3');
var nmra4=prompt('nmra4');
if(nmra3>nmra4){
    console.log('You are in');
};
var role=prompt('What is your role?');
if(role.toLowerCase()=='admin'){
    console.log('update','create','delete');
}else if(role.toLowerCase()=='moderator'){
    console.log('update');
}else{
    console.log('Hello user')
}
var pr=prompt('entrez votre nom').toLowerCase();
console.log(pr);
var result=prompt('What is your result?');
if(result>=90){
    console.log('exellent');
}else if(result>=80){
    console.log('very good');
}else if (result>=70){
    console.log('good');
}else if(result>=50){
    console.log('acceptable');
}else{
    console.log('failed');
};
var age =prompt('what is your age?');
if(age>=18){
    console.log('hello user');
}else{
    console.log('you are very young');
};
var age=prompt('quelle âge a-tu?');
    age>=18?
    console.log('tu peux conduire une voiture')
    :console.log('tu ne peux pas conduire une voitue');
var age1=prompt('Diven Age?');
    age1>18?
    console.log('you can drive a car')
    :age1==18?
    console.log('you have to get a driven licence')
    :console.log('you cannot drive a car');
var age=prompt('cheha f 3amrk');
var result=age>18?
'hello user'
:age==18?
'you are 18 now' //another method
:'you are very young';
console.log(result);
var role1=prompt('tell me you role');
switch(role1.toLowerCase()){
    case 'admin':
        console.log('create','update','delete');
    break;
    case 'moderator':
        console.log('ceate','update');
    break;
    case 'editor':
        console.log('update');
    break;
    default:
        console.log('hello user');
    break;
}
// for(i=0;i<3;){
//     console.log('hello world');
// };
// for(i=0;i<3;){
    // console.log('Hello world')
// }
// for(i=0;i<3;){
//     console.log('hello world');
// };
// for(i=0;i<3;){
//     console.log('hello world');
// }
for (i=0;i<3; i++){
    console.log('hello world');
};
for (i=0;i<3;i++){
    console.log('hello');
    console.log('world');
};
for(i=1;i<3;i++){
    console.log('hy')
};
for(i=0;i<=3;i++){
    console.log('ohayuu');
};
for(i=0;i<3;i++){
    console.log(i);
};
for(i=0;i<3;i++){
    console.log('test1');
};
for(i=0;i<3;i+=1){
    console.log('test2');
};
for(i=0;i<3;i+=2){ //hna ghadi i3awdha ghi juj mrat hit kitzad b juj
    // console.log('test3');
    console.log(i);
};
for(i=10;i>0;i--){
    console.log(i);
    // document.write(i);
    // console.log('Holla');
    // console.log('amigo');
};
var names=['ahmed','mazen','ali','gamal'];
for(i=0;i<4;i++){
    console.log(names[0]);
};
for(i=0;i<4;i++){
    console.log(names[i]); //hna i katsawi 0 u 1 u 2 u 3 mnin katsawi sifr idan ghatjib ahmed u mnin ghatsawi 2 ghatjib ali
};
var names=['Dell','HP','Casque','tllaja','iphone','xiaomi','TV'];
for(i=0;i<names.length;i++){ //hna ana la3arfch chehal mn element kayn f names idan ghandir i tkun sghr mn chehal ma kant length dial names
    console.log(names[i]);
};
var nom='mohamed';
console.log(nom[0]+'ohamed');
var nom='iguinfr';
console.log(nom[0].toUpperCase());
var nom='mohamed';
console.log(nom[0]);
var nom='abu bakr'
for(i=0;i<8;i++){
    console.log(nom[i]);
};
var nom ='khadija';
for(i=0;i<nom.length;i++){
    console.log(nom[i]);
};
var nom ='khadija';
for(i=0;i<7;i++){
    console.log(nom[i]);
};
var products=['tlfaza','tllaja','pc','mario','sddari'];
for(i=0;i<products.length;i++){
    console.log(products[i]);
};
var products=['tlfaza','tllaja','pc','mario','sddari'];
for(i=0;i<5;i++){
    console.log(products[i]);
}
var products=['tlfaza','tllaja','pc','mario','sddari'];
for(i=4;i>=0;i--){
    console.log(products[i]);
};
var products=['tlfaza','tllaja','pc','mario','sddari'];
for(i=products.length-1;i>=0;i--){ 
    console.log(products[i]);
};
var cars=['BMW','Mercedes','Honda'];
var models=[2020,2021,2022];
var colors=['black','white','red'];
for(i=0;i<3;i++){
    console.log(`car:${cars[i]}`);
    for(j=0;j<3;j++){
        console.log(`Model:${models[j]}`);
    };
    for(l=0;l<3;l++){
        console.log(`Colors: ${colors[l]}`);
    };
    console.log('______________');
};
var users=['ali','mazen','gamal',1,2,3,4,'oday','youssef','ahmed'];
for(i=0;i<10;i++){
    if(typeof users[i]=='number'){ //hna glt lih ila kan type dial data li jayani mn array numbers may3rdhach 
        continue;
    };
    if(users[i]=='gamal'){
        continue;
    };
    if(users[i]=='ali'){
        continue;
    }
    if(users[i]!='oday'){ //hna ay whda katkhalf oday 7ydha
        continue;
    }
    console.log(users[i]);
};
var users1=['ali','mazen','gamal',1,2,3,4,'oday','youssef','ahmed'];
for(i=0;i<10;i++){
    if(users1[i]=='gamal'){
        break;
    };
    console.log(users[i]);
};
var users1=['ali','mazen','gamal','oday','youssef','ahmed'];
for(i=0;i<users.length;i++){
    console.log(users1[i]);
    if(users1[i]=='youssef'){ //hna glt lih une fois twsl l yousef hbbs
        break;
    };
    // console.log(users1[i]); //hna ghadi i7bs end oday
};
var i=0;
while(i<5){
    document.write('<h1>Hello Wolrd</h1>')
    i++;
};
var i=0
while(false){
    console.log('uhayuu');
    i++;
};
var i=0;
do{
    document.write('salam '); //hna ghadi iktb lik hadi lmra lwla ead ichuf wach chrt m79e9
    i++;
}while(i<3);
function hello(){
    console.log('Hello world!');
};
hello();
var pre=prompt('Entrez votre nom');
function hi(){
    document.write('Hi '+pre)
};
hi();
function hi2(nom){
    console.log('hi '+nom)
}
hi2('Mohamed');
hi2('iguinfr');
var age=prompt('YOUR AGE');
function calcAge(){
    result=age*365;
    console.log(result);
    return age*365;
};
calcAge();
const hour=2;
function converthour(hour){
    return hour*60*60;
};
// var produit=price+taxes;
// var reuslt=produit+ads;
function pro(price,taxes,ads){
    var produit=price+taxes;
    var result=produit+ads;
    console.log(result);
    return result;
}
pro(200,2.5,10);
var prix=parseFloat(prompt('Entrez le prix'));
var taxes1=parseFloat(prompt('Entrez taxes'));
var ads1=parseFloat(prompt('Entrez le prix de ads'));
function produit(){
    resultat=prix+taxes1+ads1;
    console.log(resultat);
    return resultat;
};
produit();
// var prix=Number(prompt('Entrez le prix'));
// var taxes1=Number(prompt('Entrez taxes'));
// var ads1=Number(prompt('Entrez le prix de ads'));
// function produit(){
//     resultat=prix+taxes1+ads1;
//     console.log(resultat);
//     return resultat;
// }
// produit(); 
// console.log(Number('4 abdelrahman'));
// console.log(typeof(Number('5')));
// console.log(parseInt('4.5')); 
// console.log(parseFloat('4.5'));
// console.log(Number('4.5'));
console.log(+'5');
function pro1(price2,taxes2,ads2){
    var produit=price2+taxes2;
    var result=produit+ads2;
    // console.log(result);
    return result; 
};
var p=pro1(200,1.5,40);
console.log(p/2);
function eldehk(){
    console.log('Hello');
    return 1;
    console.log('Hello'); //hna ay haja katji mor return maghatkhdmch khas tkun return akhir haja f l code 
};
console.log(eldehk());
var prix=parseFloat(prompt('Entrez le prix'));
var taxes1=parseFloat(prompt('Entrez taxes'));
var ads1=parseFloat(prompt('Entrez le prix de ads'));
function produit(){
    resultat=prix+taxes1+ads1;
    console.log(resultat/2); //hada bhal l exemple li lfug l resultat 9smtha ela juj
    return resultat;
};
produit();
function days(age){
    var result=age*365;
    // console.log(result);
    return result;
};
var d=days(26);
console.log(d*24+' hours');
console.log(nmra);
var nmra=10;
var ra9m10;
console.log(ra9m10); //hna ghadi tl3 lik undefined 
ra9m10=20;
// console.log(n100); //u hna f dial let ghatl3 lik erreur
// let n100=7;
salam(); //hna ghadi it9ra dakchi lli ldakhl dial l function ead it9ra console li t7t mnha 
console.log('Salam');
console.log(salam());
function salam(){
    console.log('wa 3alikum salam')
    return 1;
};
// ohayuu()
// var ohayuu=function(){ // L function li katkun expression bhal hadi maymknch n3yt liha mn lfu9 bha l lfunction li lfu9 li hia salam()
//     console.log('Sensei')
// };
var hello=function(){ 
    console.log('Hey');
    return 11;
};
console.log(hello());
hello();
var mo=0;
do{
    document.write(mo++ +"<br/>"); //hna i ghayb9a itzad ma7d i<10
}while(mo<10);

for(let mp=0; mp<10;mp++){ //let hna katkhli l variable mp ikhdm ghi f had loop maykhdmch f loop khra
                      
}
// console.log(mp);
(function(){
    console.log('Azul')  
    var w10=10;   //Had l function katkhli ay variable ldakhl dialha ikhdm ghi fiha hya maykhdmch bra l function u hna
})();
console.log(typeof(w10));
var age=25; //variable globale
function Afficher(){
    var prenomm="khalid"; //variable locale
    console.log(prenomm);
    console.log(age); //un variable globale peut être utilisée dans une fonction
    console.log(typeof(prenomm));
}
Afficher();
console.log(typeof(prenomm));
// console.log(w10);
// function azul2(){
//     console.log('Azul2');
//     var y1=11;
// };
// console.log(y1);
// azul2();
(function(){
    function test2(){
        console.log('Hi')
    }
    test2(); //ghatkhdm hna
})();
// test2(); //hna had lfunction maghaidch tkhdm bra l function lwla hit hya function locale
// console.log(typeof(test2()));
// console.log(typeof(test2()));
function test3(){
    function test4(){
        console.log('Hi2');
    };
    test4()
};
test3();


test5();
console.log(test5());
function test5(){
    console.log('test5');
    return 100;
};
// test5();
// console.log(test5())
function awalan(){
    function b(){
        return 1;
    }
    return b(); 
    function b(){
        return 0;
    };
}
console.log(awalan());
awalan();// hna return katrd akhir function jat moraha u js kat9ta l code bhal hakka:
function awalan1(){
    function b(){
        return 1;
    };
    function b(){
        return 0
    };
    return b();
};
awalan1();
console.log(awalan1());

function test5(){
    console.log('test5');
    return 100;
};
test5();
console.log(test5());
function arigato(){
    function gosaymas(){
        console.log('gosaymas')
    };
    gosaymas();
};
arigato();
// gosaymas();
function hello1(name=''){ //hadi ghatl3 ila maktb walo
    console.log(`Hello ${name}`);
};
hello1();
var welcome=prompt('Saisie votre nome');
function mrhba(){
    console.log(`Hello ${welcome}`);
};
mrhba();
function calculerAge(age=0){ //hna default ghaykun 0 ila madkhl hta chi 9ima
    console.log(age*365);
};
calculerAge();
var year=prompt('Enter Your Age');
function years(){
    console.log(year*365);
};
years();
function hello2(name='',age=0){
    console.log(`Hello my name is ${name},and my age is ${age}`);
};
hello2();
var userName=prompt('Dkhl smytk');
var userAge=prompt('Dkhl 3mrk');
function mrhba1(){
    console.log(`Hello ${userName},your age is ${userAge} and in days it's ${userAge*365}`)
};
mrhba1();
function calc(num1,num2){
    console.log(num1+num2);
};
calc(10,20);
function calc2(...nmari){
    console.log(nmari);
};
calc2(1,2,7,3,9,67,23,21,9,0,78,3,09,7+6);
function calc3(...nmari2){
    console.log(nmari2);
};
calc3(12,7,2+4,10/2,5-5,10*10,13%5);
var names=['Dell','HP','Casque','tllaja','iphone','xiaomi','TV'];
for(i=0;i<names.length;i++){ //hna ana la3arfch chehal mn element kayn f names idan ghandir i tkun sghr mn chehal ma kant length dial names
    console.log(names[i]);
};
function calc4(...nmari3){
    var result=0;
    for(i=0;i<nmari3.length;i++){
        result+=nmari3[i];
    };
    console.log(result);
};
calc4(5,3); //hna ghaydir 5+3 u ghaystokihum f result
var num=5;
num+=20;
console.log(num);
// ohayuu();
var ohayuu=function(){ //hadi function expression maymknch n3yt liha mn lfu9 bhal l funcion l3adia
};
ohayuu();
(function(){
    console.log('Azul')  
    var w10=10;   //Had l function katkhli ay variable ldakhl dialha ikhdm ghi fiha hya maykhdmch bra l function u hna
})();
var f=function(){ //hadi experssion function
    console.log('Haaaay');
    return 1;
};
// f();
console.log(f());
var z=function(){
    console.log('z');
    return 1;
};
z();
var n=()=>{
    console.log('Hello');
};
n();
var tjriba=()=>{
    console.log('Arigato');
    return 19;
};
// tjriba();
console.log(tjriba());
var tjriba1=()=>1; //hna ghadi triturni lia 1 u katkhdm had l3iba ila kan endi ghi srt wahd mn l code 
console.log(tjriba1());
var tjriba2=()=>7;
console.log(tjriba2());
// tjriba2();
var tjriba3=()=>'Hello';
console.log(tjriba3());
// tjriba3();
var tjriba4=_=>'Good Morning'; //hna ila kant l function ma3ndi fiha hta chi parametre n9dr blast () ndir _
console.log(tjriba4());
var numero=(num)=>num*2;
console.log(numero(5));
var numero1=num1=>num1*3; //ila kan endi ghi parametre wahd n9d n7yd l 2a9was
console.log(numero1(3));
var numero3=(num2,num3)=>num2*num3;
console.log(numero3(10,10));