import React from 'react';
import { SortMenu } from '../../components/SortMenu/SortMenu';
import { CardList } from '../../components/CardList/CardList';
import { SearchResult } from '../../components/SearchResult/SearchResult';

export const SearchResultPage = ({cards}) => {
    return <div><SortMenu/>
    <SearchResult cards={cards}/>
    <CardList cards={cards}/>
    </div>
}