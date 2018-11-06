/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Use the Parameter Testing feature in the box below to test your code with different arguments

Sample Input : "Argument goes here"
Sample Output : "Argument"
*/

function LongestWord(str) { 
    var revStr = '';
    var finalStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[^A-Za-z0-9_]/)) {
            
            if (finalStr.length < revStr.length) {
                finalStr = revStr;
            }
            revStr = '';
        } else {
            revStr += str[i];
        }
    }
    if (finalStr.length < revStr.length) {
        finalStr = revStr;
    }
    return finalStr;
}
   
// keep this function call here 
LongestWord(readline());



//Sample Code of others
function LongestWord(sen) {
  
    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Zsd]/g, '');
    
    var arr = sen.split(' ');
    
    arr.sort(function(a, b) {return b.length - a.length});
    
    return arr.shift();
  
    // code goes here  
    return sen; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  LongestWord(readline());


function LongestWord(sen) {

    let validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let maxLength = 0;
    let longestWord = '';

    for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
        let c = sen[i];
        if (validCharacters.includes(c)) {
            length++;
            word += c;
        } else {
            length = 0;
            word = '';
        }

        if (length > maxLength) {
            maxLength = length;
            longestWord = word;

        }
    }

  return longestWord;

}
   
// keep this function call here 
LongestWord(readline());




function LongestWord(sen) { 
    var trimmed = sen.replace(/[^\w]/g, ' ');
    var words = trimmed.split(/\s+/);
    var longestWord = words.sort(function(a, b) {return b.length - a.length;})[0];
    return longestWord;
}
     
// keep this function call here 
LongestWord(readline());



function LongestWord(sen) { 
    return sen.match(/w+/g).reduce((item, next) => item.length >= next.length ? item : next);  
}
     
// keep this function call here 
LongestWord(readline());



function LongestWord(sen) { 
    
    var str = sen.replace(/[^a-z0-9+]+/gi, ' ');
    var words = str.split(" ");
    
    words.sort(function(a,b){return a.length - b.length;})
    
    var end = words.length - 1;
    var lastWord = words[end].length;
    
    for(i=0;i<=words.length;i++){ if(words[i].length == lastWord){return words[i];}
    }
}
LongestWord(readline());