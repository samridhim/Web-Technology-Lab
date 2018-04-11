var app = angular.module("currencyConvertor", []);
app.controller("ConvertorCtrl", ConvertorCtrl);

function ConvertorCtrl()
{
this.computeResult1 = function(){
var num1 = parseFloat(this.input1);
console.log(num1);
var num2 = num1 * 0.015;
this.input2= num2;
}
this.computeResult2 = function(){
var num2= parseFloat(this.input2);
console.log(num1);
var num1 = num2 * 64.92;
this.input1= num1;
}
}
