import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './index.scss';

import ResultView from './views/ResultView';
import HomeView from './views/HomeView';

function App({items}) {  
  items = items || [
    {
      name: 'Iphone 12',
      image: 'https://i2.rozetka.ua/goods/20299422/245162131_images_20299422206.jpg',
    }, 
    {
      name: 'OnePlus 8T',
      image: 'https://mobiltelefon.ru/photo/september20/14/samsung_ty_li_eto_oneplus_8t_na_kachestvennyh_izobrazheniah_picture2_0.jpg',
    },
    {
      name: 'Samsung S20',
      image: 'https://i.citrus.ua/uploads/content/product-photos/topchiy/February-2020/SM-G980FLBDSEK_07.jpg',
    }
  ];
  return (
    <div className="cmrii">
      <Router>
        <Switch>
          <Route path="/result">
            <ResultView items={items} />
          </Route>
          <Route path="/">
            <HomeView items={items} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
