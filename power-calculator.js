// Write a function called powerCalculator() that takes two parameters, 
// an integer as a base, and another integer as an exponent. 
// The function returns the value of the base raised to the power of the exponent.
//  Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = (num, exponent) => {
    if (exponent < 0) {
        return 'exponent should be >= 0'
    }
    if (exponent === 0) {
        return 1;
    }
    if (exponent > 0){
        return num * powerCalculator(num, exponent - 1)
    }
}

console.log(powerCalculator(10,2))