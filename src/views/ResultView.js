import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { GraphElement } from '../components/GraphElement';
import store from '../store/store';
import { findItem, resultToArray, sendStatistics } from '../utils/result';

export default function ResultView({ items }) {
  const history = useHistory();

  const result = store.getState().result;
  const resultArray = resultToArray(result);

  useEffect(() => {
    if(resultArray.length) {
      sendStatistics(resultArray)
    };
  }, [resultArray])

  if(!resultArray.length) {
    history.push('/');
    return null;
  }

  const maxValue = Math.max.apply(null, Object.values(result).map(Math.abs));;
  const resultAlt = findItem(items, resultArray[0].name);

  console.log('result', resultArray);
  return (
    <div className="wrapper">
      <div className="results-header">
        <h2>Result item:</h2>
        <img src={resultAlt.image} alt={resultAlt.name} />
        <div className="result-name">{resultAlt.name}</div>
        <button className="button is-success">BUY</button>
      </div>
      <hr />
      <h2>Result graph:</h2>
      <div className="results-graph">
        {resultArray.map((item, i) =>
          <GraphElement key={i} result={result} label={item.name} maxValue={maxValue} />)
        }
      </div>
    </div>
  )
}