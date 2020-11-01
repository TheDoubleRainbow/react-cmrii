import React from 'react';

export const Recommendations = ({ recommendation, fastAnswer }) => {

  if (!recommendation && !fastAnswer) {
    return null;
  }
  return <>
    <hr />
    <div className="recom-blocks">
      {fastAnswer &&
        <div className="recom-block fast-answer">
          <div className="img-block">
            <img src={fastAnswer.image} alt={fastAnswer.name} />
          </div>
          <div className="content-block">
            <div className="content-title">Predicted answer</div>
            <div className="content-item">{fastAnswer.name}</div>
            <div className="content-actions">
              <button className="button is-light is-success is-small">BUY</button>
            </div>
          </div>
        </div>
      }
      {recommendation &&
        <div className={`recom-block recommendation ${(recommendation && fastAnswer) ? 'double' : ''}`}>
          <div className="img-block">
            <img src={recommendation.image} alt={recommendation.name} />
          </div>
          <div className="content-block">
            <div className="content-title">You may also like</div>
            <div className="content-item">{recommendation.name}</div>
            <div className="content-actions">
              <button className="button is-light is-success is-small">BUY</button>
            </div>
          </div>
        </div>
      }
    </div>
  </>
}
