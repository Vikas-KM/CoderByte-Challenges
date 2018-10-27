/*
Have the function FirstReverse(str) take the str parameter being passed and
return the string in reversed order.
For example: if the input string is "Hello World and Coders"
then your program should
return the string sredoC dna dlroW olleH
*/

function FirstReverse(str) {

    var revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}


//Code of other and Analysis

function FirstReverse(str) {

    var arr = str.split('');
    arr.reverse();
    return arr.join('');
}



function FirstReverse(str) {
    // code goes here  
    return str.split('').reverse().join('');

}



function FirstReverse(str) {
    var a = "";
    for (i = str.length; i >= 0; i--) {
        a += str.charAt(i);
    }
    str = a;
    return str;

}