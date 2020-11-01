import React from 'react';

export const CompareItem = ({item, sliderValue}) => {
  return <div className="item">
    <div className="item-image-wrapper">
      <img alt={item.name} src={item.image} />  
    </div>
    <div className="item-name">{item.name}</div>
    <div className="item-value">{sliderValue}</div>
  </div>
}