const fn = require('./fn')

test('2+3은 5다',()=>{
    expect(fn.add(2,3)).toBe(5)
})

test('3+3은 5가 아니다',()=>{
    expect(fn.add(3,3)).toBe(5)
})

test('3+3은 5가 아니다',()=>{
    expect(fn.add(3,3)).not.toBe(5)
})

test('참조값을 다룰땐 toEqual을 사용',()=>{
    expect(fn.makeUser("yd",22)).toEqual({
        name:"yd",age:22
    })
})

// toEqual보다는 엄격하게 toStrictEqual사용을 권장한다고합니다.
test('엄격한 비교를 진행하는 toStrictEqual',()=>{
    expect((fn.makeUser("yd",22))).toStrictEqual({
        name:"yd",age:22
    })
})



test('에러발생함수가 error발생문구 에러를 발생시키는지',()=>{
    expect(()=>fn.throwErr()).toThrow('error발생')
})

test('null은 null이다.',()=>{
    expect(null).toBeNull()
})

test('문자는 true입니다.',()=>{
    expect("hello world").toBeTruthy()
})

test('문자는 false입니다',()=>{
    expect(false).toBeFalsy()
})

test('문자는 defined입니다',()=>{
    expect('hello world').toBeDefined()
})

test('undefined는 undefined입니다',()=>{
    expect(undefined).toBeUndefined()
})


/*
toBeGreaterThan() 크다
toBeGreaterThanOrEqual() 이상
toBeLessThan() 작다
toBeGreaterThanOrEqual() 이하
*/

test('ID는 10자 이하',()=>{
    const id = "kim yd"
    expect(id.length).toBeLessThan(10)
})

//JavaScript는 2진법을 사용해 소숫점을 정확히 계산못합니다.
test('에러발생',()=>{
    expect(fn.add(0.1,0.2)).toBe(0.3)
})

test('소수 계산은 toBeCloseTo 이용',()=>{
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3)
})


test('Hello world 에 a 글자가 있는가?',()=>{
    expect("hello world").toMatch(/a/)
})

test('Hello world 에 h 글자가 있는가?',()=>{
    expect("Hello world").toMatch(/h/i)
})



test('유저배열에 kim이 있는가?',()=>{
    const user = "kim"
    const userList = ["lee","kim","park"]
    expect(userList).toContain(user)
})

//test 성공
test('에러발생함수가 error발생문구 에러를 발생시키는지',()=>{
    expect(()=>fn.throwErr()).toThrow('error발생')
})

//test 실패
test('에러발생함수가 발생 에러를 발생시키는지',()=>{
    expect(()=>fn.throwErr()).toThrow('발생')
})
