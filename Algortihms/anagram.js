//time complexity is O(n^2)

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    console.log(arr1);
    console.log(arr2);
    for (let i of arr1) {
        i = arr2.indexOf(i); // /** is squared */
        if (i === -1) {
            return false;
        }
        arr2.splice(i, 1);
    }
    return true;
}

console.log(validAnagram('vikvi', 'vivik'));