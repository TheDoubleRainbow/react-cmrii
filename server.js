const express = require('express');
const fs = require('fs');

const allItems = require('./items');

const app = express();
const port = 3001;

const RESULTS_PATH = './results.json';

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const findItem = (name) => {
  for(let item of allItems) {
    if(name == item.name) {
      return item;
    }
  }
}

const getStatisticData = () => {
  if (fs.existsSync(RESULTS_PATH)) {
    return JSON.parse(fs.readFileSync(RESULTS_PATH, { encoding: 'UTF-8' }));
  } else {
    return [];
  }
};

const itemsFilter = (checkItem, items) => {
  for (let item of items) {
    if (checkItem.name === item.name) {
      return false;
    }
  }
  return true;
};

const statItemsIncludesPrimaryItem = (primaryItem, validStatItems) => {
  for (let statItem of validStatItems) {
    if (primaryItem === statItem.name) {
      return true;
    }
  }
  return false;
}

const getRecommendation = (primaryItem, items) => {
  const statistics = getStatisticData();
  const validStatistics = [];
  statistics.forEach((statItems) => {
    const validStatItems = statItems.filter((item) => statItemsIncludesPrimaryItem(primaryItem, statItems) && itemsFilter(item, items));
    if (validStatItems.length) {
      validStatistics.push(validStatItems);
    }
  });

  const recomMap = {

  };

  for (let validStat of validStatistics) {
    for (let statItem of validStat) {
      if (statItem.name !== primaryItem && statItem.rate >= 0) {
        mapItem = recomMap[statItem.name];
        recomMap[statItem.name] = { 
          rate: mapItem ? mapItem.rate + statItem.rate : statItem.rate, 
          i: mapItem ? mapItem.i + 1 : 1 
        };
      }
    }
  };

  console.log(recomMap);

  let bestMatch = null;

  for(let key in recomMap) {
    if(bestMatch) {
      if(bestMatch.rate/bestMatch.i < recomMap[key].rate/recomMap[key].i) {
        bestMatch = {name: key, ...recomMap[key]};
      }
    } else {
      bestMatch = {name: key, ...recomMap[key]};
    }
  }
  if(bestMatch) {
    console.log('Best match: ', bestMatch);
    return findItem(bestMatch.name);
  } 
  return null;
};

app.post('/getRecommends', (req, res) => {
  const items = req.body.items;
  const primaryItem = req.body.primaryItem;

  res.send(getRecommendation(primaryItem, items));
});

app.post('/result', (req, res) => {
  const results = getStatisticData();
  results.push(req.body);

  fs.writeFileSync(RESULTS_PATH, JSON.stringify(results));
  res.sendStatus(200).end();
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})