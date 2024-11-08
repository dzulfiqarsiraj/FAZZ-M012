const maxSumArray = (arr, n) => {
    if(!arr.length){
        return null
    }

    let result = 0
    
    for(let i = 0; i < arr.length; i++){
        let temp = 0
        for(let j = i; j < i+n; j++){
            temp += arr[j]
        }
        if(temp > result){
            result = temp
        }
    }
    return result
}

const newArr = [1,2,4,5,6,7,10]
console.log(maxSumArray(newArr, 3))