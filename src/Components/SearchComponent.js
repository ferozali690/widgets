import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log("searchResult", searchResult);
  const onSearchHandle = (e) => {
    setSearchText(e.target.value);
  };

  const renderList = searchResult.map((item) => (
    <div>
      <p>{item.title}</p>
      <p>{item.snippet}</p>
    </div>
  ));

  useEffect(() => {
    console.log("i ran");
    const getData = async () => {
      const getResult = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchText,
        },
      });
      setSearchResult(getResult.data.query.search);
    };

    const getTimeoutId = setTimeout(() => {
      searchText && getData();
    }, 5000);

    return () => {
      clearTimeout(getTimeoutId);
    };
  }, [searchText]);

  return (
    <div>
      <input type="text" value={searchText} onChange={onSearchHandle} />
      {searchResult.length === 0 ? <p>Loading</p> : renderList}
    </div>
  );
};
export default SearchComponent;
