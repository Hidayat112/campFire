export const screenStepMapLabel = ['Dashboard', 'Name', 'Gender', 'Country',"Age","ProfileStatic"];
export const getPhotosBlob = (photoArr = []) => {
  return photoArr.map((item,index) => {
    let data = new FormData();
    data.append("file", {
      uri: item,
      type: "image/jpeg",
      name: `image${index}${Date.now()}`,
    });
    return data;
  })
}
export const checkPhotosArr = (photoArr = []) => {
  if (photoArr.length) {
    photoArr.forEach((item,index) => {
      if (!item) return false;
    })
    return true;    
  }
  return false;
}
export const getAgeRange = (startRange, endRange) => {
  const numbers = [];

  for (let i = startRange + 1; i < endRange; i++) {
    numbers.push(i);
  }

  return numbers;
};
