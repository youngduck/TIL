const objectMap = new Map

console.log(objectMap.has('가'))
objectMap.set('가',1)
objectMap.set('나',1)
objectMap.set('다',1)
objectMap.set('나',objectMap.get('나')+1)
objectMap.set('나',objectMap.get('나')+1)
objectMap.set('가',objectMap.get('가')+1)


console.log(objectMap.keys())
console.log(objectMap.values())
console.log(objectMap.entries())

//2차원 배열 정렬
console.log([...objectMap.entries()].sort((a,b)=>(b[1]-a[1]))[0][1])

