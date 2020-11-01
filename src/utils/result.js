export const findItem = (items, itemName) => {
  for(let item of items) {
    if(item.name === itemName) {
      return item;
    }
  }
}

export const resultToArray = (result) => {
  const resultArray = [];
  for (let key in result) {
    resultArray.push({ name: key, rate: result[key] });
  }
  return resultArray.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else {
      return 1;
    }
  });
};

export const sendStatistics = (resultArr) => {
  fetch('http://localhost:3001/result', {
    method: 'POST',
    body: JSON.stringify(resultArr),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
