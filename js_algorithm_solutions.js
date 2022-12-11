var arrayList = [
    5, 1, -5, 0, 2, 10, -4, 15, 30, 11, 35, 11, -54, 22, 10, 0, -50, 21, -15,
    12, 20, -14, 25, 85, 71, 0, -35, 12, 100, 31, 13,
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

//hackerrank questions
// easy
//1. Complete the function solveMeFirst to compute the sum of two integers.
function solveMeFirst(a, b) {
    return a + b;
}
console.log(solveMeFirst(4, 10));

//2. simple array sum Given an array of integers, find the sum of its elements.

function arraySum(arr) {
    var sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arrayList));

// 3. A Very Big Sum

function aVeryBigSum(arr) {
    var sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
    return sum;
}

console.log(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);

//plus minus
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero

function plusMinus(arr) {
    var arrLength = arr.length;
    var positive = 0;
    var negative = 0;
    var zero = 0;

    for (let i in arr) {
        if (arr[i] == 0) {
            zero++;
        } else if (0 > arr[i]) {
            negative++;
        } else if (arr[i] > 0) {
            positive++;
        }
    }

    (zero / arrLength).toFixed(6);

    console.log(`zeros: ${(zero / arrLength).toFixed(6)}`);
    console.log(`negatives : ${(negative / arrLength).toFixed(6)}`);
    console.log(`positives: ${(positive / arrLength).toFixed(6)}`);
}

plusMinus(arrayList);

//staircase
function staircase(num) {
    for (let index = 1; index <= num; index++) {
        const space = num - index;

        for (let j = 1; j <= space; j++) {
            process.stdout.write(" ");
        }

        for (let j = 1; j <= index; j++) {
            process.stdout.write("#");
        }

        process.stdout.write("\n");
    }
}

staircase(5);

function minMaxSum(arr) {
    var totalSum = 0;
    var sorted = arr.sort((a, b) => {
        return a - b;
    });
    for (i in arr) {
        totalSum += arr[i];
    }

    console.log(`${totalSum - sorted.pop()} ${totalSum - sorted.shift()}`);
}

minMaxSum([1, 2, 3, 4, 5]);

function birthdayCakeCandles(candles) {
    var maxCandle = 0;
    var freq = 0;

    for (let i in candles) {
        if (candles[i] > maxCandle) {
            maxCandle = candles[i];
        }
    }

    for (let i in candles) {
        if (candles[i] == maxCandle) {
            freq++;
        }
    }

    console.log(freq);
}

birthdayCakeCandles([3, 2, 1, 3]);

function gradingStudents(arr) {
    var returningArr = [];
    for (let i in arr) {
        if (arr[i] < 38) {
            returningArr.push(arr[i]);
        } else if (arr[i] % 10 > 5) {
            var modDifference = 10 - (arr[i] % 10);
            if (modDifference < 3) {
                returningArr.push(arr[i] + modDifference);
            } else {
                returningArr.push(arr[i]);
            }
        } else if (arr[i] % 10 == 5) {
            returningArr.push(arr[i]);
        } else if (arr[i] % 10 < 5) {
            var modDifference = 5 - (arr[i] % 10);
            if (modDifference < 3) {
                returningArr.push(arr[i] + modDifference);
            } else {
                returningArr.push(arr[i]);
            }
        }
    }
    return returningArr;
}

console.log(gradingStudents([73, 67, 38, 33]));

function divisibleSumPairs(k, arr) {
    var counter = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index + 1; index2 < arr.length; index2++) {
            if ((arr[index] + arr[index2]) % k == 0) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(divisibleSumPairs(5, [1, 2, 3, 4, 5, 6]));

function migratoryBirds(arr) {
    value = 0;
    var map = new Map();
    for (let i in arr) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    const sortedMap = new Map([...map].sort((a, b) => a[0] - b[0]));
    const key = sortedMap.keys();
    const val = sortedMap.values();

    console.log(`The key -> ${key}`);
    console.log(`The val -> ${val}`);

    console.log(Math.max(...sortedMap.values()));
    //todo get key from value
}

migratoryBirds([2, 2, 2, 5, 5, 7, 7]);

function drawingBook(n, p) {
    var front = p / 2;
    var back = n / 2 - front;
    console.log(Math.min(front, back));
}

drawingBook(37455, 29835);

function electronicsShop(key, drives, num) {
    var arr = [];
    for (let i in key) {
        for (let j in drives) {
            var addition = key[i] + drives[j];
            if (addition <= num) {
                arr.push(addition);
            }
        }
    }
    console.log(arr);

    if (arr.length <= 0) {
        return -1;
    } else {
        return Math.max(...arr);
    }
}

console.log(electronicsShop([40, 50, 60], [4, 8, 12], 60));
