import React from 'react';
import { useHistory } from 'react-router-dom';

import { GraphElement } from '../components/GraphElement';
import store from '../store/store';
import { findItem } from '../utils/result';

export default function ResultView({ items }) {
  const history = useHistory();

  const result = store.getState().result;
  const resultLabels = Object.keys(result);
  const maxValue = Math.max.apply(null, Object.values(result).map(Math.abs));;
  const resultAlt = findItem(resultLabels[0], items);

  console.log('result', result);
  if(!resultLabels.length) {
    history.push('/');
    return null;
  }
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
        {resultLabels.map((label, i) =>
          <GraphElement key={i} result={result} label={label} maxValue={maxValue} />)
        }
      </div>
    </div>
  )
}