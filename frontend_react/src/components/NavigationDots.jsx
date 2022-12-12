import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "opensource", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line
          <a
            className="app__navigation-dot"
            href={`#${item}`}
            key={item + index}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
