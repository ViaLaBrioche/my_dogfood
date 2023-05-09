import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import { SortMenu } from "./components/SortMenu/SortMenu"
import './components/CardList/main.css'
import { CardList } from "./components/CardList/CardList"
import { Footer }  from './components/Footer/Footer'
import { SearchResult } from './components/SearchResult/SearchResult';
import data from './components/data/data.json'


function App() {

  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
    return cards.filter(({name}) => 
      name.toLowerCase().includes(searchText.toLowerCase())
  );
}

  const [cards, setCards] = useState(data)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtredCards = filterCards(searchTerm, data);
      setCards(filtredCards)
      console.log(filtredCards.length)
    }, 300);
      return () => clearTimeout(Debounce)
  }, [searchTerm]);

const searchResult = cards.length

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
