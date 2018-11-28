//time complexity O(n)

function sumZero(arr) {
    let j = arr.length - 1;
    let i = 0;
    while (i < j) {

        if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]];
        }
        if (arr[i] + arr[j] > 0) {
            j--;
        } else {
            i++;
        }
    }
    return 0;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));