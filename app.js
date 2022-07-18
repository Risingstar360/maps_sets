
//Quick Question #1
//What does the following code return?

new Set([1,1,2,2,3,4])

//Returns 1,2,3,4 - Sets remove duplicates

//Quick Question #2
//What does the following code return?
// [...new Set("referee")].join("")

//Returns 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//returns 
// 0: {Array(3) => true}
// 0: {Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowels(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        if(vowels(char)) {
            vowelMap.set(char, vowelMap.get(char) +1);
        } else {
            vowelMap.set(char, 1);
        }
    }
    return vowelMap;
}

//Need assistance with this - returning NaN on vowels