import React from "react";
import { ReactComponent as IconLoupe } from "./Icon/loupe.svg";

export const Search = () => {
    return  <form class="search__form">
    <input type="search" placeholder="Search" className="search__input"/>
    <button type="submit" className="search__button">
      <IconLoupe/>
      </button>
      </form>
    
}