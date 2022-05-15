
function PrintHelloWorld () {
    for (var i = 0; i<3; i++){
        document.write ("Hello World")
    }
}
PrintHelloWorld()


function exercise1 (num1, num2) {
    num1= +prompt("number1")
    num2= +prompt("number2")
    if (num1>num2){
        return console.log (num1)
    }
    else (num2>num1);{
        return console.log (num2)
    }
}
exercise1 ()

function exercise2 (number1, number2){
    num1= +prompt("number one")
    num2= +prompt("number two")
    var result= num1+num2
    return console.log (result)
}
exercise2 ()

function exercise3 (num){
    num= +prompt("your number")
    for (var i= num-1; i>0; i-- )
    num+=i
    return console.log (num)
}
exercise3 ()

var num1= 6
var num2= 5

function exercise4 (){
    var helper= num1
    num1= num2
    num2= helper
}
console.log (num1, num2)
exercise4 ()
console.log (num1, num2)

function exercise5

function exercise6 (min1, min2){
    // min1= +prompt("first number")
    // min2= +prompt("sec number")
    if (min1<min2){
        console.log (min1)
    }
    else console.log (min2)
}
exercise6()

function exercise7 (num1, num2, num3){
    num1= +prompt("number1")
    num2= +prompt("number2")
    num3= +prompt("number3")
    if (num1<num2&&num1<num3){
        console.log (num1)
    }
    else if (num2<num1&&num2<num3){
        console.log (num2)
    } 
    else 
        console.log (num3)
}
exercise7()

function exercise8 (num1, num2, num3) {
    var sum = num1+ num2+ num3
    return document.write(sum/3)
}
exercise8 (+prompt("number1"), +prompt("number2"), +prompt("number3"))

function exercise9 (num1, num2, num3, num4) {
    var sum = num1 + num2 + num3 + num4
    return document.write (sum)
}
exercise9(+prompt("number1"), +prompt("number2"), +prompt("number3"), +prompt("number4"))












