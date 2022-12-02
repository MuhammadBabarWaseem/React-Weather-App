import React from "react";
import {useRef } from "react";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div className="flex shadow-lg">
      <input type="search" value={props.searchData} onChange={()=>{props.eventHandler(searchInput.current.value)}} ref={searchInput} className="border border-black w-full p-3 text-2xl"/>
      <button onClick={props.searchWeather} className="p-3 bg-slate-600 text-white">Search</button>
    </div>

  );
}
