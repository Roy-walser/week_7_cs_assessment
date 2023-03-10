// step 1 (sum zer0)

const addZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let r = 0; r < arr.length; r++) {
            if (arr[r] != arr[i]) {
                if (arr[i] + arr[r] === 0) {
                    console.log(true)
                    return
                }
            }
        }
    }
    console.log(false)
}

addZero([1, 2, 3, -2])

// step 2 (Unique Ch@ract3r5)

function uniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false
        }
    }
    return true
}

console.log(uniqueChars('zebra'))
//console.log(uniqueChars('zebraa'))

// step 3 (Pangram Sentence)

isPangram = (str) => {
    str = str.toLowerCase()

    if (str.includes('a') != true) {
        return false
    }
    if (str.includes('b') != true) {
        return false
    }
    if (str.includes('c') != true) {
        return false
    }
    if (str.includes('d') != true) {
        return false
    }
    if (str.includes('e') != true) {
        return false
    }
    if (str.includes('f') != true) {
        return false
    }
    if (str.includes('g') != true) {
        return false
    }
    if (str.includes('h') != true) {
        return false
    } 
    if (str.includes('i') != true) {
        return false
    }
    if (str.includes('j') != true) {
        return false
    }
    if (str.includes('k') != true) {
        return false
    }
    if (str.includes('l') != true) {
        return false
    }
    if (str.includes('m') != true) {
        return false
    }   
    if (str.includes('n') != true) {
        return false
    }
    if (str.includes('o') != true) {
        return false
    }
    if (str.includes('p') != true) {
        return false
    }
    if (str.includes('q') != true) {
        return false
    }
    if (str.includes('r') != true) {
        return false
    }
    if (str.includes('s') != true) {
        return false
    }
    if (str.includes('t') != true) {
        return false
    }
    if (str.includes('u') != true) {
        return false
    }
    if (str.includes('v') != true) {
        return false
    }
    if (str.includes('w') != true) {
        return false
    }
    if (str.includes('x') != true) {
        return false
    }
    if (str.includes('y') != true) {
        return false
    }
    if (str.includes('z') != true) {
        return false
    }      
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
//console.log(isPangram('I like cats, but not mice'))

// step 4 (Loooooooooooongest word!)

const findLongestWord = (arr) => {
    wordLength = []
    for (let i =0; i < arr.length; i++) {
        wordLength.push(arr[i].length)
    }
    let largest = wordLength[0]
    for (let r = 0; r < wordLength.length; r++) {
        if (largest <= wordLength[r]) {
            largest = wordLength[r]
        }
    }
    console.log(largest)
}

findLongestWord(['basketball', 'mississippi'])