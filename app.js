

// console.log(myFunction("Hello world"));
// console.log(myFunction3("Hello world 3"));

// function myFunction(a){
//     return a
// }


// Function expression (khai bao function theo dang bieu thuc)
// bieu thuc function
// let myFunction2 = function(b){
//     return b
// }

// Arrow function (hàm mũi tên)
// vì Arrow là biểu thức hàm được thông báo qua các từ khoá const, let, var
// => scope - phạm vi hoạt động của arrow function sẽ được quyết định bởi từ khoá khai báo

// var : thì arrow function tại gđ khởi tạo(create phase)
// sẽ có giá trị là undefined=> khi thực thi arrow function trước khi khai báo
// thì sẽ báo lỗi [Tên function] không phải là 1 function

//let/const: đây là 2 từ khoá khai báo biến trong giá es6
// chúng luôn có một vùng chết tạm thời trước khi khai báo
// Temporal dead Zone (TDZ)- không thể gọi biến trước khai báo
// => Khi thực thi arrow function trước khi khai báo thì sẽ báo lỗi
// không thể truy cập các biến được khai báo bằng từ khoá let/const trước khi khởi tạo.

// TDZ Temperal deal Zone
// start TDZ

// end TDZ
// let myFunction3 = (c) => {
//     return c;
// };

// trong es6 có thể viết tắt 1 dòng return
// let myFunction4 = (a, b) => a + b;
// let myFunction4 = (a, b)=>{
// return a + b 
// };
// let myFunction5 = (d)=> d + 1;


// Function execution (Thuc thi Function)
// console.log(myFunction("Hello world"));
// console.log(myFunction2("Hello world 2"));
// console.log(myFunction3("Hello world 3"));

// function Mouse(color,name){
//     // console.log(this);
//     this.name = name;
//     this.color = color;
//     this.type = "mouse";
// }
// // Khởi tạo instance từ contructor function
// let mickey = new Mouse("black", "Mickey Mouse");
// let jerry = new Mouse("black", "Jerry Mouse");

// console.log(mickey);
// console.log(jerry);

// function cal(a, b){
//     console.log(this);
//     return a + b;
// }
// cal(1, 2);
let person = {
    name : "Dinh",
    age : 20,
    hello: function(){
        console.log(this.name + " Hello");
    },
};
person.hello()


// 
function cloneArrAndMultiplyBy2(arr) {
    let result = [];
    for (let el of arr) {
      result.push(el * 2);
    }
    return result;
  }
  
  function cloneArrAndDivideBy2(arr) {
    let result = [];
    for (let el of arr) {
      result.push(el / 2);
    }
    return result;
  }
  
  function cloneArrAndDosomething(arr, fn) {
    let result = [];
    for (let el of arr) {
      fn(el);
    }
    return result;
  }
  
  cloneArrAndDosomething([1,2,3,4], function(el) {
    return el / 2;
  })


