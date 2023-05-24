import React from "react";

export const SearchResult = ({cards}) => {

    return <p className="main_result">По запросу найдено {cards.length} товаров</p>
}