import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './components/CardList/main.css'
import { Footer }  from './components/Footer/Footer'
import { Api } from './components/Api/Api';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { NotFound } from './pages/NotFoundPage/NotFound'
import './pages/NotFoundPage/notFound.css'

function App() {
  
  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };

  

  const api = new Api(config);
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
    return cards.filter(({name}) => 
      name.toLowerCase().includes(searchText.toLowerCase())
  )
};


  useEffect(() => {
    const Debounce = setTimeout(() => {

  api.getAllItems()
    .then(res => {
    return setCards(filterCards(searchTerm, res.products.filter(item => 
      item.author['_id'] === '645871a2e0bf2c519b9ccfbe')))
    })
    .catch((error) => {
        console.log(error)
    });
    }, 300);

  return () => clearTimeout(Debounce)

},[searchTerm]);

useEffect(() => {
  
}, [cards])

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm}/>
    <div className='main__container'>
        <Routes>
          <Route path="/" element={<CatalogPage setCards={setCards} cards={cards} searchTerm={searchTerm}/>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
