// oop => object oriented programming

// procedural programming => every piece of code into function and variables

// oop group every related function and variable into a unit => object
// every variable called property and every function called method

// procedural programming
// let carName = "BMW";
// let model = 2020;
// function printCar(carName , model){
//     console.log(carName , model)
// }
// printCar(carName, model)

// oop
// let car = {
//     carName: "BMW",
//     model:2020,
//     printCar: function(){
//         console.log(this.carName , this.model)
//     }
// }
// car.printCar();

//Encapsulation => group every related function and variable into a unit => object
// reduce complexity + increase resuability

// Abstraction => dont care about details , care about what it do 

// inheritance => mechanism that allows you to eliminate redundant code

// polymorphism => poly=many | morph=form ==>many forms
//////////////////////////////////////////////////////////////////////////////////////////
// define object literals {}
// let person = {
//     name: "Ali",
//     sayHello:function(){
//         console.log("hello")
//     }
// }
// console.log(person.name);
// person.sayHello()

// let person2 = {
//     name: "Ahmed",
//     sayHello:function(){
//         console.log("hello")
//     }
// }
// console.log(person2.name);
// person2.sayHello()


// factory function
// function person (name){
//     return {
//         name:name,
//         sayHello:function(){
//             console.log("hello")
//         }
//     }
// }

// const per1 = person("Ali");
// console.log(per1)
// console.log(per1.name);
// per1.sayHello()
// const per2 = person("Ahmed");
// console.log(per2.name);
// per2.sayHello()

////////////////////////////////////////
// constructor function
// function Person(name){
//     //  var this = {}
//     this.name=name;
//     this.sayHello= function(){
//         console.log("hello")
//     }
//     //  return this
// }

// const per= new Person("Ali")
// console.log(per)
// console.log(per.name);
// per.sayHello()

// const per2= new Person("Ahmed")
// console.log(per2)
// console.log(per2.name);
// per2.sayHello()

////////////////////////////////////////////////
// constructor property
// let c={} => c.constructor = Object()
// let b=[] => b.constructor = Array()
// let f=function => f.constructor = Function()

//////////////////////////////
// adding item to object => . , []
// delete item from object => delete objectname.property
// let car ={
//     name : "BMW",
//     model : 2020
// }
// car.color="black";
// car["used"] =true;
// delete car.name;
// console.log(car);

//////////////////////////////////////////////////////////////////////////
//to get all keys of object in array ==> Object.keys(objectName)
// let car ={
//     name : "BMW",
//     model : 2020
// }
// car.color="black";
// car['used'] =true;
// // delete car.name;
// console.log(Object.keys(car));

//////////////////////////////////////////////////////
// to loop on keys of object to get values of keys use ==> for(let key in objectName)
// let car ={
//     name : "BMW",
//     model : 2020
// }
// car.color="black";
// car['used'] =true;
// // delete car.name;
// for(let key in car){
//     console.log(car[key]);
// }
/////////////////////////////////////////////////////
// if you need to search use if("keyName" in objectName)
// let car = {
//     name : "BMW",
//     model : 2020
// }
// car.color="black";
// car['used'] =true;
// // delete car.name;
// if("name" in car) {
//     console.log("yes")
// }
////////////////////////////////////////////////////////////////////////////////////

// Abstraction => dont care about details , care about what it do 

// function Person(name){
//     this.name=name;
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//     }
// }
// let p1 = new Person("Ahmed");
// p1.details()

// function Person(name){
//     this.name=name;
//     let printPrice=function(){
//         console.log("price is 200")
//     }
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//         printPrice()
//     }
// }
// let p1 = new Person("Ahmed");
// console.log(p1.name);
// // p1.printPrice()
// p1.details()
/////////////////////////////////////////////////////////////////////////////////////
// classical inheritance
// function Person(name){
//     this.name=name;
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//     }
// }
// function Student(name){
//     this.name=name;
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//     }
//     this.sayHello=function(){
//         console.log("Hello")
//     }
// }

// function Person(name){
//     this.name=name;
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//         console.log(this)
//     }
// }
// function Student(name,age ){
//     this.age=age;
//     Person.call(this,name)
//     this.sayHello=function(){
//         console.log("Hello")
//     }
// }
// // let p = new Person("Ali");
// // p.details()

// let s1= new Student("Ahmed",20);
// console.log(s1)

// Person ==> parent or super
// student ==> child or sub
////////////////////////////////////////////////////////////////////////////////////
// prototype ==> parent inherted from

// function Person(name){
//     this.name=name;
//     this.details=function(){
//         console.log(`person name is ${this.name}`)
//         console.log(this)
//     }
// }
// function Student(name , age){
//     this.age=age;
//     Person.call(this,name)
//     this.sayHello=function(){
//         console.log("Hello")
//     }
// }
// let s1= new Student("Ahmed",20);
// console.log(s1)
////////////////////////////////////////////////////////////////////////////////
// prototypical Inheritance
// let obj = {
//     title:"javaScript",
//     test: function(){
//         console.log("test")
//     }
// }
// console.log(obj);
// console.log(obj.title);
// obj.test()
// console.log(obj.toString())
///////////////////////////////////////////////////////////////////////
// Descriptor
// let obj = {
//     title:"javaScript",
// }
// console.log(obj);
// console.log(obj.title);
// console.log(Object.keys(obj));

// let parentObject=Object.getPrototypeOf(obj)
// let desc = Object.getOwnPropertyDescriptor(parentObject,"toString")
// console.log(desc)

// let obj = {
//     title:"javaScript",
// }
// Object.defineProperty(obj,"title",{
//     configurable:true,
//     writable:true,
//     enumerable:false
// })
// // delete obj.title
// // console.log(obj);

// // obj.title="css";
// // console.log(obj)

// console.log(Object.keys(obj))

/////////////////////////////////////////////////////////////////////////////
// constructor prototype
// function Person(name){
//     this.name=name
// }
// let p = new Person("Ali")
// console.log(p)

// console.log(Person.prototype === p.__proto__)