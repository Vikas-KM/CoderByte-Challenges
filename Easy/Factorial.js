/*
Have the
function FirstFactorial(num) take the num parameter being passed and
return the factorial of it(e.g.if num = 4,
    
return (4 * 3 * 2 * 1)).
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/


function FirstFactorial(num) {

    if (num >= 1)
        return 1;
    else
        return num * FirstFactorial(num - 1);
}


//Others code and analysis

function FirstFactorial(num) {

    let sum = 1;
    for (let i = num; i > 0; i--) {
        sum *= i;
    }
    return sum;
}



function FirstFactorial(num) {

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}



function FirstFactorial(num) {

    if (num < 0) return NaN;
    return (num > 1) ? FirstFactorial(num - 1) * num : 1;

}