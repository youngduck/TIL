const fibo = (idx,memo={})=>{
    if(idx<=2) return 1
    if(idx in memo) {
        console.log(idx,memo)
        return memo[idx]; 
    }
    memo[idx]= fibo(idx-1,memo) + fibo(idx-2,memo)
    return memo[idx]
}

console.log(fibo(10))