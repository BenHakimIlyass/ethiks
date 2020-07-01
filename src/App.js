import React from "react";
import "./styles.css";
import styled from "styled-components";
import Nav from "./nav";
import { motion } from "framer-motion";
import AnimatedHero from "./animatedHero";

export default function App() {
  const [loaded, toggle] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Nav loaded={loaded} isBlack />
      <AnimatedHero toggle={toggle} loaded={loaded} />
    </div>
  );
}
