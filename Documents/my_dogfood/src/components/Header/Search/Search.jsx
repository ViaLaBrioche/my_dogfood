import React from "react";
import { ReactComponent as IconLoupe } from "./Icon/loupe.svg";
import { Link } from "react-router-dom";

export const Search = ({setSearchTerm}) => {
    return  <form className="search__form">
    <input onChange={(e) => setSearchTerm(e.target.value)}  id="search" type="search" placeholder="Search" className="search__input"/>
      <Link className="search__link" to="/product/search">
        <button type="button" className="search__button">
          <IconLoupe className="search__loupe__icon" />
        </button>
      </Link>
  </form>
    
}
