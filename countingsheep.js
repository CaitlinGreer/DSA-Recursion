// Write a recursive function that counts how many sheep jump over the fence.

const countingSheep = function(numSheeps) {
    if (numSheeps === 0) {
        console.log("All sheep jumped over the fence")
        return
    }
    
    console.log(numSheeps + ': Another sheep jumps over the fence')
    return countingSheep(numSheeps - 1)
}

countingSheep(3)