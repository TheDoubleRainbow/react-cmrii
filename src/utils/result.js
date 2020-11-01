export const findItem = (name, items) => {
  for(let item of items) {
    if(item.name === name) {
      return item;
    }
  }
  return null;
}