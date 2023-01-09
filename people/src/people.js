import people from "./data/people";

export const allFemaleNames = () => {
  return people.filter((item) => item.gender === "f").map((item) => item.name);
};

const getFilteredData = (where) => {
  return where !== "all"
    ? people.filter((item) => item.gender === "m" && item.region === where)
    : people.filter((item) => item.gender === "m");
};

export const maleCoderCount = (where) => {
  return getFilteredData(where).filter(item => item.coder).length;
};
export const combinedMaleAge = (where) => {
  console.log(getFilteredData(where))
  console.log(getFilteredData(where).map(item => item.age))
  return getFilteredData(where).map(item => item.age).reduce((accumulator, currentValue) => accumulator + currentValue);
};
