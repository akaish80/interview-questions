import { allFemaleNames, combinedMaleAge, maleCoderCount } from "./people";

describe("People", () => {
  describe("allFemaleNames", () => {
    const names = ["Liz", "Annie", "Michelle", "Ivy", "Rosey", "Steph"];

    it("should be", () => {
      expect(allFemaleNames()).toEqual(names);
    });
  });

  describe("maleCoderCount", () => {
    it("should be 2 in tor", () => {
      expect(maleCoderCount("tor")).toBe(2);
    });

    it("should be 3 in all", () => {
      expect(maleCoderCount("all")).toBe(3);
    });
  });

  describe("combinedMaleAge", () => {
    it("should be 152 in ldn", () => {
      expect(combinedMaleAge("ldn")).toBe(152);
    });

    it("should be 374 in all", () => {
      expect(combinedMaleAge("all")).toBe(374);
    });
  });
});
