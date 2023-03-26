/*
    Author: Ahmet Yıldız @alkan589
*/

//Creating an object using object constructor

const obj=new Object();
obj.name="ahmet";
obj.age=28

console.log(obj.name)

//Alternative way:

const newObj={
    property:"hello",
    property2:"world",
    isFalse:true,
    string1:new String("ali"),
    variable:undefined
}
console.log(newObj["property"]); // output: "value1"
console.log(newObj["property2"]); // output: "value2"
console.log(newObj["isFalse"]); // output: "value3"
console.log(newObj["string1"]);
console.log(newObj["variable"]);


const person={
    name:"ahmet",
    age:28,
    
    showMyInfo:function(){
        console.log("hello");
    }
}

person.showMyInfo()
//Alternatively :
function Person(name,age){
    this.name=name,
    this.age=age,

    this.showInformation=function(){
        console.log(`hello my name is ${this.name}, my age is ${this.age}`);
    }
}
var p=new Person("ahmet",28)
p.showInformation()
function Kisi(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

    this.setSalary=function(newSalary){
        this.salary=newSalary;
    }
    this.getSalary=function(){
        return this.salary;
    }

    this.setAge=function(newAge){
        this.age=newAge;
    }
    this.getAge=function(){
        return this.age;
    }

    this.setName=function(newName){
        this.name=newName;
    }
    this.getName=function(){
        return this.name;
    }
}
  
class Rect {
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    getArea(){
        return this.length*this.width
    }
    getPerimeter(){
        return (this.length+this.width)*2
    }

}
const r1=new Rect(10,10);
const r2=new Rect(20,30);
console.log(r1.getArea())
console.log(r1.getPerimeter())
console.log(r2.getArea())
console.log(r2.getPerimeter())

function checkPromise(str){
    return new Promise((resolve,reject)=>{
        if(typeof str === "string"){
            resolve("successful");
        }
        else{
            reject("error");
        }
    }).then((message)=>{
        console.log(message)
    }
    ).catch((message)=>{
        console.log(message)
    })
}
checkPromise("ahmet")


//Callbacks
const sayMyName=(name,c)=>{
    console.log(`${name}`)
    c();
}

function callback(){
    console.log("hello");
}
sayMyName("Heissenberg",callback)

//Closures
function counter(){
    let count=0;

    function inc(){
        count++;
        console.log(count)
    }
    return inc
}
const counter1=counter();

counter1();
counter1();
counter1();

function delay(time){
    return new Promise(resolve=>setTimeout(resolve,time))
}
function sayHello(){
    console.log("hello");
    delay(1000).then(()=>{
        console.log("world")
    })
}
sayHello()