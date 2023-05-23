import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SortMenu } from "../../components/SortMenu/SortMenu";

export const CatalogPage = ({cards}) => {
    return <div><SortMenu/>
    <CardList cards={cards}/>
    </div>
}