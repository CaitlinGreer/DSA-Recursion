// Write a function that reverses a string. 
// Take a string as input, reverse the string, and return the new string.

const reverseString = function(string) {
    if (string === '') {
        return ''
    }
    return reverseString(string.substr(1)) + string.charAt(0)
}

let string = 'Reverse'

console.log(reverseString(string))