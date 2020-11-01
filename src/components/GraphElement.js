import React from 'react';

export const GraphElement = ({result, maxValue, label}) => {
  const value = result[label];
  const isNegative = value < 0;
  const width = isNegative ? (value * -1)/maxValue * 100 : value/maxValue * 100;
  const color = isNegative ? '#2850F2' : '#F0471F';
  return <div className="graph-element">
    <div className="graph-label">{label}</div>
    <div className="graph-line-wrapper">
      <div
        style={{ width: `${width}%`, background: color }}
        className="graph-line">
        {result[label] || 0}
      </div>
    </div>
  </div>
}