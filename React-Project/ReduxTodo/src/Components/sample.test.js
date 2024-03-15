// test("test01",()=>{
//     let data=10;
//     expect(data).toBe(10)
// })
// test("test02",()=>{
//     let data=10;
//     expect(data).not.toBe(12);
// })

import sum from "./test"

// describe("sum fun test",()=>{
// test("sum test 1",()=>{
//     expect(sum(5,3)).toBe(7)
// })
// test("sum test 2",()=>{
//     expect(sum(5,4)).toBe(9)
// })
// })

test("testcase 01",()=>{
    expect(sum(5,2)).toEqual({name:"Anil"})
})
