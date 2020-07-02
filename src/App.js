import React from "react";
import "./styles.css";
import Nav from "./nav";
import AnimatedHero from "./animatedHero";
import Hero from "./hero/";

export default function App() {
  const [loaded, toggle] = React.useState(false);

  React.useEffect(() => {
    let time = setTimeout(() => {
      toggle(true);
    }, 3000);
    return () => clearTimeout(time);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Nav loaded={loaded} isBlack />
      <AnimatedHero toggle={toggle} loaded={loaded} />
      {loaded && <Hero delay={3} />}
    </div>
  );
}
