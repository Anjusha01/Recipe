import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './Category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryItems from './CategoryItems';
import Recipie from './Recipie';
import NavComp from './NavComp';
import Fav from './Fav';
import Search from './Search';
import LogReg from './LogReg';
import SearchResult from './SearchResult';
import { store } from './Store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Wrap the layout component NavComp around all the routes */}
        <Route path="/" element={<NavComp />}>
          <Route index element={<App />} />
          <Route path="favourites" element={<Fav />} />
          <Route path='login' element={<LogReg/>}/>
          <Route path="categories" element={<Category />} />
          <Route path="categoryitems/:category" element={<CategoryItems />} />
          <Route path="categoryitems/:category/:idM" element={<Recipie />} />
          <Route path='search' element={<Search/>}/>
          <Route path='searchresult' element={<SearchResult/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
