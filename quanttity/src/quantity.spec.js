import { formatQuantity } from "./quantity";

describe("formatQuantity", () => {
  it("Should return an empty string for non number quantities", () => {
    expect(formatQuantity(null)).toEqual("");
    expect(formatQuantity(undefined)).toEqual("");
    expect(formatQuantity("Oops")).toEqual("");
    expect(formatQuantity("")).toEqual("");
  });

  it("Should return quantities between -999 and 999 as a string", () => {
    expect(formatQuantity(1)).toEqual("1");
    expect(formatQuantity(1.2345)).toEqual("1.2345");

    expect(formatQuantity(-1)).toEqual("-1");
    expect(formatQuantity(-12.3456)).toEqual("-12.3456");
  });

  it("Should add a K suffix to quantities between 1000 and 999,999", () => {
    expect(formatQuantity(10000)).toEqual("10K");
    expect(formatQuantity(12345)).toEqual("12.345K");
  });

  it("Should add a K suffix to quantities between -1000 and -999,999", () => {
    expect(formatQuantity(-10000)).toEqual("-10K");
    expect(formatQuantity(-12345)).toEqual("-12.345K");
  });

  it("Should add an M suffix to quantities between 1,000,000 and 1,000,000,000", () => {
    expect(formatQuantity(10000000)).toEqual("10M");
    expect(formatQuantity(12345600)).toEqual("12.3456M");
  });

  it("Should add an M suffix to quantities between -1,000,000 and -999,999,999", () => {
    expect(formatQuantity(-10000000)).toEqual("-10M");
    expect(formatQuantity(-12345600)).toEqual("-12.3456M");
  });

  it("Should add a B suffix to quantities greater than 999,999,999", () => {
    expect(formatQuantity(10000000000)).toEqual("10B");
    expect(formatQuantity(12345600000)).toEqual("12.3456B");
  });

  it("Should add a B suffix to quantities less than -999,999,999", () => {
    expect(formatQuantity(-10000000000)).toEqual("-10B");
    expect(formatQuantity(-12345600000)).toEqual("-12.3456B");
  });
});
