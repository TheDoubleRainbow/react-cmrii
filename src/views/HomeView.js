import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import store from '../store/store';
import { CompareItem } from '../components/CompareItem';
import { buldComparesList, handleAnswer } from '../utils/alternatives';
import { shuffle } from '../utils/rnd';

const MAX_SLIDER_VALUE = 100;

export default function HomeView({items: alternativesList}) {
  const [activeCompare, setActiveCompare] = useState(0);
  const [results, setResults] = useState({});
  const [value, setValue] = useState(MAX_SLIDER_VALUE/2);
  const compares = useMemo(() => shuffle(
    buldComparesList(alternativesList), [alternativesList]), [alternativesList]
  );
  const history = useHistory();

  const compareItems = useCallback(() => {
    setResults(handleAnswer(compares[activeCompare], results, value, MAX_SLIDER_VALUE));
    if(compares[activeCompare + 1]) {
      setActiveCompare(activeCompare + 1);
      setValue(MAX_SLIDER_VALUE/2);
    } else {
      store.dispatch({ type: "SET_RESULT", payload: results })
      history.push('/result');
    }
  }, [compares, results, value, activeCompare, history]);

  return (
    <div className="wrapper">
      <div className="items">
        {compares && compares[activeCompare].map(
          (item, i) => 
          <CompareItem 
            key={i} 
            sliderValue={i === 0 ? MAX_SLIDER_VALUE - value : value} 
            item={item} 
          />
        )}
      </div>
      <div className="valuePicker">
        <input 
          onChange={(e) => setValue(e.target.value)} 
          className="slider is-fullwidth is-success is-circle" 
          step="1" min="0" max={MAX_SLIDER_VALUE} value={value} type="range" />
      </div>
      <div className="controls">
        <button onClick={compareItems} className="button is-success">Next</button>
      </div>
    </div>
  )
}