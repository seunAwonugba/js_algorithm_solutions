var arrayList = [
    5, 1, -5, 2, 10, -4, 15, 30, 11, 35, 11, -54, 22, 10, -50, 21, -15, 12, 20,
    -14, 25, 85, 71, -35, 12, 100, 31, 13,
];

//linear time complexity O(n)

function linearSearch(num, arr) {
    for (let i in arr) {
        if (arr[i] == num) {
            return true;
        }
    }
    return false;
}

// console.log(linearSearch(-50, arrayList));

//logarithmic search time complexity ologn
function logSearch(num, arr) {
    var sortedArray = arr.sort((a, b) => {
        return a - b;
    });
    var middleIndex = sortedArray.length / 2;
    var middleIndexValue = sortedArray[middleIndex];

    if (num >= middleIndexValue) {
        for (
            let index = middleIndex;
            middleIndex <= sortedArray.length;
            index++
        ) {
            if (sortedArray[index] == num) {
                return true;
            }
        }
    } else if (num <= middleIndexValue) {
        for (let index = 0; index <= middleIndex; index++) {
            if (sortedArray[index] == num) {
                return true;
            }
        }
    }

    return false;
}

console.log(logSearch(10, arrayList));
