import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { SortMenu } from "../../components/SortMenu/SortMenu";

export const CatalogPage = ( {searchTerm, cards}) => {
    
    return <div><SortMenu/>
    <div>{searchTerm == 0 ? null : <SearchResult cards={cards} />}</div>
    <CardList cards={cards}/>
    </div>
}