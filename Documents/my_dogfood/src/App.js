import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import { SortMenu } from "./components/SortMenu/SortMenu"
import './components/CardList/main.css'
import { CardList } from "./components/CardList/CardList"
import { Footer }  from './components/Footer/Footer'
import { SearchResult } from './components/SearchResult/SearchResult';
import { Api } from './components/Api/Api';


function App() {
  

  const MyData = (res) => {
    return setCards(res.products.filter(item => 
      item.author['_id'] === '645871a2e0bf2c519b9ccfbe'))
  }
  


  
  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
    return cards.filter(({name}) => 
      name.toLowerCase().includes(searchText.toLowerCase())
  );
} 
  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };
  const api = new Api(config);
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchResult = cards.length

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtredCards = filterCards(searchTerm, cards);
      setCards(filtredCards)
    }, 300);
      return () => clearTimeout(Debounce)
  }, [searchTerm]);

  

  
  api.getAllItems()

    .then(res => {
      return MyData(res)
    })
    .catch((error) => {
        console.log(error);
    });



  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm}/>
    <div className='main__container'>
        <SearchResult searchResult={searchResult}/>
        <SortMenu/>
        <CardList cards={cards}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
