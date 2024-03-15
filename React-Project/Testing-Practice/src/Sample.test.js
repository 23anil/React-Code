// ------Number data type-------
// test("test01",()=>{
//     let data=10;
//     expect(data).toBe(10)
// })

// ------Not equal to Number check-------
// test("test02",()=>{
//     let val=12;
//     expect(val).not.toBe(13)
// })

// ------string data type-------
// test("test03",()=>{
//     let str="anil";
//     expect(str)
// })

// ------undefined data type-------
// test("test04",()=>{
//     let str=10;
//     let str1=10;
//     expect(str).
// })

import sum from "./tests";

describe("testcases", () => {
  test("test01", () => {
    expect(sum(10, 5)).toBe(15);
  },1);

  test("test02", () => {

    expect(sum(5, 5)).toBe(10);
    
  });
});

// test("test01",()=>{
//     expect(sum(10,20)).toBe(30)
// })
