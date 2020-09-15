/*
//1.	
let number1= 2 ** 10;
let number2= 2 ** 10;
let bigInt1= 2n ** 10n;
let bigInt2= 2n ** 10n;
console.log("Number:",number1**number2);
console.log("BigInt:",bigInt1**bigInt2);
*/

/*
//2.
let stringUnicaLinha="Linha 1\nLinha 2\nLinha 3";
let stringMultiplasLinhas=`Linha 1
Linha 2
Linha 3`;
console.log("String definada com unica linha",stringUnicaLinha);
console.log("String definada com multiplas linhas",stringMultiplasLinhas);
*/

/*
//3.
let string= `O resultado da expressão é: ${((2 ** 3)*2)/4}`;
console.log(string);
*/

/*
//4.
console.log("JS suporta codifica\u00E7\u00E3o Unicode");
*/

/*
//5.
let comparacaoEstrita= 1==="1"?"V":"F";
let comparacaoAbstrata= 1=="1"?"V":"F";
console.log("comparação estrita:",comparacaoEstrita);
console.log("comparação abstrata:",comparacaoAbstrata);
*/

/*
//6.
let stringDt="17/07/2020";
stringDt=stringDt.replace("/","-").replace("/","-");
console.log(stringDt);
*/

/*
//7.
let email="rafaelqg@univali.br";
let indexAt=email.indexOf("@");
let usuario=email.substring(0,indexAt);
let dominio=email.substring(indexAt+1,email.length);
console.log(usuario,dominio);
*/

/*
//8.
let number=10.0/3.0;
let numberFormated=number.toPrecision(3);

console.log(number, numberFormated);
*/

/*
//9
if(1<2){
    console.log("Escopo de bloco");
    let num=5;
}
console.log(num);
*/
/*
//10
let nivel=5;
let categoria="";

    if(nivel<=0.9){ 
        categoria="Micro";
    }else if(nivel<=3.9){
        categoria="Minor";
    }else if(nivel<=4.9) {
        categoria="Light";
    }else if(nivel<=5.9){
        categoria="Moderate";
    }else if(nivel<=6.9){
        categoria="Strong";
    }else if(nivel<=7.9){
        categoria="Major";
    }else if(nivel<=8.9){
        categoria="Great";
    }
console.log("categoria",categoria);
*/
/*
//11
let fatorial=500;
let acumulador=1;
do {
    acumulador=acumulador*fatorial;
    fatorial--;
    console.log(fatorial,acumulador);
} while(fatorial>=1);

let fatorialn=500n;
let acumuladorn=1n;
do {
    acumuladorn=acumuladorn*fatorialn;
    fatorialn--;
    console.log(fatorialn,acumuladorn);
} while(fatorialn>=1);
*/

//12
/*
let numero=2;
let dobro=numero <<1;
console.log(numero,dobro);
*/
//13
/*
function mediaValor(n1,n2,n3,n4){
    return (n1+n2+n3+n4)/4;
}
let mediaV=mediaValor(1,2,3,4);
console.log(mediaV);

function mediaReferencia(n1,n2,n3,n4,mediaR){
    mediaR[0]=(n1+n2+n3+n4)/4;
}
mediaR=[];
mediaReferencia(1,2,3,4,mediaR);
console.log(mediaR);
*/

/*
//14
function somatorio(n1,n2,n3,n4,n5){
    return n1+n2+n3+n4+n5;
}
let somatorioArrow =  (n1,n2,n3,n4,n5) =>{
    return n1+n2+n3+n4+n5;
}

console.log(somatorio(4,5,6,7,8));
console.log(somatorioArrow(4,5,6,7,8));
*/
/*
//15
function recursividadeFatorial(valor){
    if(valor==1){
        return 1;
    }else{
        return valor * recursividadeFatorial(valor-1);
         
    }
}
console.log(recursividadeFatorial(6));
*/

/*
//16
let obj={
    prop1: "a",
    prop2: true,
    prop3: 2
};
if("prop1" in obj){
    console.log("prop1 existe");
}else{
    console.log("prop1 não existe");
}

if("prop4" in obj){
    console.log("prop4 existe");
}else{
    console.log("prop4 não existe");
}
*/

/*
//17
let obj1={"prop1":1};
let obj2={"prop1":1};
let obj3=obj1;
let isEqual=Object.is(obj1,obj2);
console.log(isEqual);

isEqual=Object.is(obj1,obj3);
console.log(isEqual);
*/

/*
//18
let obj={
    prop1: "a",
    prop2: true,
    prop3: 2
};
console.log(obj["prop1"]);
delete  obj["prop2"];
console.log(obj);
*/
/*
//19
let objA={"a":1, "b": 2};
let objB={"c":3, "d": 4};
let objC={...objA,...objB};
console.log(objC);
*/

/*
//20
let objA={"a":1, "b": 2};
let objB={"c":3, "d": 4};
let objC={};
Object.assign(objC,objA);
Object.assign(objC,objB);
console.log(objC);
*/

//21
/*
function fatorial(valor){
    let fatorial=1;
    while(valor>1){
        fatorial=fatorial*valor;
        valor--;
    }
    this.fatorial=fatorial;
}

let obj={}
fatorial.call(obj,4);
console.log(obj);

let obj2={}
let funcBind=fatorial.bind(obj2);
funcBind(5);
console.log(obj2);
*/

/*
//22
let list=[];
list.push(3);
list.push(7);
list.push(11);
list.push(13);

function buscaMaior(list){
    let maior=list[0];
    for(let i=1; i<list.length; i++){
        if(list[i]>maior) maior=list[i];
    }
    return maior;
}
console.log(buscaMaior(list));
*/
/*
//23
let obj={"c":3};
let list=[{"a":1},{"b":2},obj,{"d":4}];

function buscaObj(list,obj){
    let index=list.indexOf(obj);
    if(index==-1){
        console.log(list);
        return null;
    }else{
        list.splice(index,1);
        return index;
    }
}
let retorno=buscaObj(list,obj);
console.log(retorno,list);
*/

/*
//24
let valores=[1, true, "abc"];
[a,b,c]=valores;
console.log(a,b,c);
*/

/*
//25
let objects=[{"a":1, "b":2, "c":3},{"a":4, "b":5, "c":6},{"a":7, "b":8, "c":9},];
let sqlOutput="";
objects.forEach((obj)=>{
    let keys=Object.keys(obj);
    let values=Object.values(obj);
    sqlOutput+=`insert into objects (${keys.join()}) values(${values.join()});`;
}); 
console.log(sqlOutput);
*/

/*
//26
let numbers=[3,4,5,6,7,8];
let somatorio=0;
for(n of numbers){
    somatorio+=n;
}
console.log(somatorio);
*/

/*
//27
let obj1={"nome": "joao", "telefone": "+55 (48) 9999-9999", "endereco":{"rua":"avenida xpto", "numero":202}};
let jsonString=JSON.stringify(obj1);
obj2=JSON.parse(jsonString);
console.log(obj1, obj2, jsonString);
console.log(Object.is(obj1, obj2));
*/

//28
/*
let values=[7,8,1,1,2,3,6,7,4, 3, 6, 1, 1, 2,3];
let filteredValues=values.filter(value => value >= 7);
console.log("Filtered",filteredValues);
let transformedValues = filteredValues.map(value => value**2);
console.log("Transformed",transformedValues);
let soma=transformedValues.reduce((acumulador, value) => acumulador += value);
console.log("Reduced",soma);

console.log("Media",soma/filteredValues.length);
*/

/*
//29
function Person(name, phone, email) {
        this.name = name;
        this.phone=phone;
        this.email=email;
    }
    const p1 = new Person("Person A", "00 00 00000 00000", "persona@mail.com");
    const p2 = new Person("Person B", "00 00 00000 00001", "personb@mail.com");

    console.log(p1,p2);
 */   

//30
/*
function Person(name, phone, email) {
        this.name = name;
        this.phone=phone;
        this.email=email;
    }
    
    Person.prototype.sayMyName = function() {
        console.log(this.name);
    }

    function Student(name, phone, email, course) {
            Person.call(this,name,phone,email);
            this.course=course;
        }

        Student.prototype.sayMyCourse = function() {
            console.log(this.course);
        }
        
        
        Student.prototype = Object.create(Person.prototype);
        const s = new Student("Student A", "00 00 00000 00000", "student@mail.com","Computer Science");
        console.log(s);    
        s.sayMyName();
        //s.sayMyCourse();
*/

//31.
/*
class Person {

    constructor(name, phone, email){
        this.name = name;
        this.phone=phone;
        this.email=email;
    }
    
    sayMyName = function() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, phone, email, course){
        super(name,phone,email);
        this.course=course;
    }

    sayMyCourse = function() {
           console.log(this.course);
    }
}  
        
        const s = new Student("Student A", "00 00 00000 00000", "student@mail.com","Computer Science");
        console.log(s);    
        s.sayMyName();
        s.sayMyCourse();
*/
/*
//32
class Person {
    #name;
    #phone;
    #email;

    constructor(name, phone, email){
        this.#name = name;
        this.#phone=phone;
        this.#email=email;
    }
    
    sayMyName = function() {
        console.log(this.#name);
    }
}

class Student extends Person {
    constructor(name, phone, email, course){
        super(name,phone,email);
        this.course=course;
    }
    sayMyNameStudent = function() {
       console.log(this.#name);
    }
    
}
const s=new Student("Student A", "00 00 00000 00000", "student@mail.com","Computer Science");
s.sayMyNameStudent();
*/

/*
//33
class Person {
    #name;
    #phone;
    #email;
    #id;
    static nextId=1;
    constructor(name, phone, email){
        this.#name = name;
        this.#phone=phone;
        this.#email=email;
        this.id=Person.nextId;
        Person.nextId++
    }
    
    sayMyName = function() {
        console.log(this.#name);
    }
}

const p1=new Person("Student A", "00 00 00000 00000", "student@mail.com");
console.log(p1);

const p2=new Person("Student B", "00 00 00000 00000", "student@mail.com");
console.log(p2);

const p3=new Person("Student C", "00 00 00000 00000", "student@mail.com");
console.log(p3);
*/

/*
//34
const diasUteis=22;
const horasTrabalhadasDia=6;
class MembroEquipe{
    #nome;
    constructor(nome){
        this.nome=nome;
    }
    
}

class FreeLancer extends MembroEquipe{
    #valorHora;
    constructor(nome, valorHora){
        super(nome);
        this.#valorHora=valorHora;
    }
    calculaCustoHoraMes=function(){
        return this.#valorHora;
    }
}

class Funcionario extends MembroEquipe{
    #salario;

    constructor(nome, salario){
        super(nome);
        this.#salario=salario;
    }
    calculaCustoHoraMes=function(){
        return this.#salario/horasTrabalhadasDia/diasUteis;
    }
}

let list=[];
list.push(new FreeLancer("Rafael", 80));
list.push(new Funcionario("Marcelo", 7890));
list.forEach(obj =>{
   let custo= obj.calculaCustoHoraMes();
   console.log("Custo hora:"+custo);
});
*/
/*
//35
const configs= new Map();
configs.set("ip", "127.0.0.1");
configs.set("login", "root");
configs.set("password", "12345");

for (let [key, value] of configs) {
        console.log(key, value);
    }
*/

/*
//36
const municipios = new Map();
municipios.set(1, {codigoIBGE: 4205407, name: "Florianópolis"});
municipios.set(2, {codigoIBGE: 3304557, name: "Rio de Janeiro"});
municipios.set(3, {codigoIBGE: 3550308, name: "São Paulo"});

const metaData = new WeakMap();
metaData.set(municipios.get(1), {populacao:500973, densidade:623.68});
metaData.set(municipios.get(2), {populacao:6718903, densidade:5265.82});
metaData.set(municipios.get(3), {populacao:12252023, densidade:7398.26});

municipios.forEach(function(obj){
    console.log(obj, metaData.get(obj));
});
*/

/*
//37
const symbolA=Symbol("A");
const obj={
    prop1:  symbolA
}
console.log(obj.prop1=="A");
console.log(obj.prop1==Symbol("A"));
console.log(obj.prop1==symbolA);
*/

/*
//38
let lista=[1,2,3,4];
const iterator = lista[Symbol.iterator]();
do{
interatorObject=iterator.next();
console.log(interatorObject.value);
}while(!interatorObject.done);
*/

/*
//39
let lista=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const pageSize=3;
function* getPaginator(){
    let currentIndex=0;
     while(currentIndex<lista.length){
        let lastIndex=currentIndex+pageSize>lista.length?lista.length:currentIndex+pageSize;
        yield lista.slice(currentIndex,lastIndex); 
        currentIndex+=pageSize;
     }
}

const pointer=getPaginator();
console.log(pointer.next());
console.log(pointer.next());
console.log(pointer.next());
console.log(pointer.next());
*/

/*
//40.
let dataPT="12/12/2012";
let dataISO="2012-12-12";
let regExp = new RegExp("[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]");
console.log(regExp.test(dataPT));
console.log(regExp.test(dataISO));
*/

/*
//41.
let cnpj="84.307.974/0001-02";
let numeroInscricaoRaiz="";// 8  digitos
let filiais="";//4 digitos
let digitoVerificador="";//2 ultimos.

const cnpjER = new RegExp("(?<numeroP1>[0-9]{2}).(?<numeroP2>[0-9]{3}).(?<numeroP3>[0-9]{3})/(?<filiais>[0-9]{4})-(?<digito>[0-9]{2})");
const cnpjParts = cnpjER.exec(cnpj);
console.log(cnpjParts);
numeroInscricaoRaiz=cnpjParts[1]+cnpjParts[2]+cnpjParts[3];
filiais=cnpjParts[4];
digitoVerificador=cnpjParts[5];
console.log(numeroInscricaoRaiz,filiais,digitoVerificador);
*/

/*
//42.
let d1= new Date(2020,8,10);
let d2= new Date(2020,8,20);
let difference=d2-d1;
let differenceInDays=difference/1000/60/60/24;
console.log(difference, differenceInDays);
*/
/*
//43.
class NegativeNumberError extends Error {
     constructor(msg = "No message error", info) {
          super(msg);
          this.name = this.constructor.name;
          this.info = info;
          this.date = new Date();
      }
    }


const list=[9,6,7,8,2,-3,0,1];
function printNumbers(list){
    for (let i=0; i<list.length;i++){ 
        let number=list[i];
        if(number >0){
            console.log(number);
        }else{
            const error = new NegativeNumberError("Erro on index:"+i, `Value of ${number} is negative.`);
            throw error;
        }
    }

}
function callWithErrorHandler(list){
    try{
        printNumbers(list);
    }catch(e){ 
        console.log("Error Identified",e);
    }
}
callWithErrorHandler(list);
*/

//44.
/*
function arraySearch(resolve,list, iBegin, iEnd, searchValue) {
    for(let i=iBegin;i<iEnd;i++){
        //console.log(i,list[i]);
        if(list[i]==searchValue){
            resolve(i);
        }
    }
}

let promises=[];
let i=0;
const list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let searchRange=5;
let searchValue=12;

while(i<list.length){
    let nextIndex=i+searchRange;
    if(nextIndex>list.length){
        nextIndex=list.length;
    }
    let p=new Promise(resolve =>{
        arraySearch(resolve,list, i,nextIndex , searchValue);
        });
    promises.push(p);
    i=nextIndex;
}
console.log(promises);
Promise.race(promises).then(data => console.log(data)); 
*/
/*
//45
const Usuario = {
        autenticar() {
            console.log(`autenticar usuario ${this.name}`);
        }
    }
    const Contato = {
        getEmail() {
            console.log(this.email);
        },
        setEmail(email) {
            this.email=email;
        }

    }
    
    class Funcionario {
        constructor(name) {
            this.name = name;
            Object.assign(Funcionario.prototype, Contato, Usuario);
        }
        listaAtividades(){
            console.log(`Lista de atividades usuario ${this.name}`);
        }
    }
    const marcello = new Funcionario("Marcello");
    marcello.setEmail("marcello.thiry@gmail.com");
    marcello.getEmail();
    marcello.autenticar();
    marcello.listaAtividades();
    */
  
    /*
    //exercício 46
    let obj= {
        prop1: "valor 1",
        prop1: "valor 2"
    }

    let var1=obj?.prop3?.att1;
    let x= var1 ?? "propriedade inexistente";
    console.log(x);
    */