const arr = [1,2,3,4,5,6,7,8]

const bs = ()=>{
    let low = 0;
    let high = arr.length-1;
    
    const target = 2
    
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===target) return target
        else if (arr[mid]>target) high=mid-1
        else low = mid+1
    }
    //못찾았을때.
    return -1
}

console.log(bs())
