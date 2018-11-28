//time complexity is O(n)

function validAnangram(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    const charList = {};
    for (let i = 0; i < str1.length; i++) {
        let character = str1[i];
        charList[character] ? charList[character] += 1 : charList[character] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let character = str2[i];
        if (!charList[character]) {
            return false
        } else {
            charList[character] -= 1;
        }
    }
    return true;
}

console.log(validAnangram('vikasshirkya', 'shirkyavikas'));