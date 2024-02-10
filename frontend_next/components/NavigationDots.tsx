
const NavigationDots = ({ active }: { active: string }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "opensource", "contact"].map(
        (item: string, index: number) => (
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
