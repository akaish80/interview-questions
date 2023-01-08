import { adder } from "./spy";

// spyOn here
function spyOn(fn){
  let i =0
  const arr = []
  const paramArr = []

  const a = (...params) => {
  i = i +  1
  const count = arguments[0](...params)
  arr.push(count)
  paramArr.push(...params)
  return count
 }

 a.callCount = () => {
   return i
 }

 a.returned = (val) => {
   return arr.includes(val)
 }

 a.wasCalledWith = (val) => {
   return paramArr.includes(val)
 }
 
   return a
}
const adderSpy = spyOn(adder);

describe("Spy", () => {
  it("Calling adder with 2 and 4 should yield 6", () => {
    expect(adderSpy(2, 4)).toEqual(6);
  });

  it("Calling adder with 3 and 5 should yield 8", () => {
    expect(adderSpy(3, 5)).toEqual(8);
  });

  it("Call count should equal 2", () => {
    expect(adderSpy.callCount()).toEqual(2);
  });

  it("Adder should have been called with 4", () => {
    expect(adderSpy.wasCalledWith(4)).toEqual(true);
  });

  it("Adder should not have been called with 0", () => {
    expect(adderSpy.wasCalledWith(0)).toEqual(false);
  });

  it("Adder should have returned 8", () => {
    expect(adderSpy.returned(8)).toEqual(true);
  });

  it("Adder should not have returned 0", () => {
    expect(adderSpy.returned(0)).toEqual(false);
  });
});
