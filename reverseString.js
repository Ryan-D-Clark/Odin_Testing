function reverseString(string){
    newString = ""
    for(x of string){
        newString = x + newString
    }
    return newString
}

module.exports = reverseString