import React from "react";
import Accordian from "./Accordian";

import SearchComponent from "./SearchComponent";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <React.Fragment>
      <h1>App</h1>
      {<Accordian items={items} />}
      {/*<SearchComponent />*/}
    </React.Fragment>
  );
};

export default App;
