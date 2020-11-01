export const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const shuffle = (inputArray) => {
  const array = [...inputArray];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
