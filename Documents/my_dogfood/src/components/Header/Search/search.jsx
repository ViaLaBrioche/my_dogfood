import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactComponent as IconLoupe } from "./Icon/loupe.svg";

export const Search = ({setSearchTerm}) => {
    return  <form class="search__form">
    <input onChange={(e) => setSearchTerm(e.target.value)} id="search" type="search" placeholder="Search" className="search__input"/>
    <button type="submit" className="search__button">
      <IconLoupe/>
      </button>
      </form>
    
}