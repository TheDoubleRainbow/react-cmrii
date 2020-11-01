const checkIfCompareExists = (compares, alt1, alt2) => {
  for (let compare of compares) {
    if (
      ((compare[0].name === alt1) && (compare[1].name === alt2))
      || ((compare[0].name === alt2) && (compare[1].name === alt1))
    ) {
      return true;
    }
  }
  return false;
}

export const buldComparesList = (alternatives) => {
  const compares = [];
  for (let alternative1 of alternatives) {
    for (let alternative2 of alternatives) {
      const alt1 = alternative1.name;
      const alt2 = alternative2.name;
      if ((alt1 !== alt2) && !checkIfCompareExists(compares, alt1, alt2)) {
        compares.push([alternative1, alternative2]);
      }
    }
  }
  return compares;
};

const calcAltValue = (i, value, maxValue) => {
  return i === 0 ? maxValue - value - maxValue / 2 : value - maxValue / 2;
}

export const handleAnswer = (alternatives, results, value, maxValue) => {
  const newResults = { ...results };
  alternatives.forEach((alt, i) => {
    const resultValue = calcAltValue(i, value, maxValue);
    newResults[alt.name] ? newResults[alt.name] += resultValue : newResults[alt.name] = resultValue;
  });
  return newResults;
}