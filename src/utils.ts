export const screenStepMapLabel = ['Dashboard', 'Name', 'Gender', 'Country',"Age","ProfileStatic"];

export const getAgeRange = (startRange, endRange) => {
  const numbers = [];

  for (let i = startRange + 1; i < endRange; i++) {
    numbers.push(i);
  }

  return numbers;
};
