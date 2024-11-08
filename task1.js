
function countBinner(n){
    let count = n
    let binner = [n%2]
    while(count > 1){
        let temp = Math.floor(count / 2)
        binner = [...binner, temp % 2]
        count = temp
    }
    return binner.reverse()
}

const findPrime = (n) => {
    let pembagi = 0
    for(let i = 1; i <= n; i++ ){
        if(n % i == 0){
            pembagi++
        }
    }
    
    if(pembagi == 2){
        return true
    } else {
        return false
    }
}

const countPrime = (lower, upper) => {
    let count = 0
    for(let i = lower; i <= upper; i++){
        // convert to binary
        const binaryNum = countBinner(i)
        let tempCount = binaryNum.reduce((cumm, curr) => {
            return cumm + curr
        })
        // code to check prime number
        const isPrime = findPrime(tempCount)
        if(isPrime){
            count++
        }
    }
    return count
}


console.log(countPrime(6,10))