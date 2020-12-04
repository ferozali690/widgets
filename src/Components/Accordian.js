import React from "react";
import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleIndex = (indexId) => {
    setActiveIndex(indexId);
  };
  const renderedItems = items.map((item, index) => {
    const compareIndex = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${compareIndex} `}
          onClick={() => handleIndex(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${compareIndex}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
