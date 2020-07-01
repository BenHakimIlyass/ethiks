import React from "react";
import "./styles.css";
import styled from "styled-components";
import Nav from "./nav";
import Logo from "./logo";
import { AnimateSharedLayout, motion } from "framer-motion";

const ease = [0.6, 0.05, -0.01, 0.9];

export default function AnimatedHero({ loaded, toggle }) {
  return (
    <Hero
      animate={{
        clipPath: loaded ? "inset(100% 0 0 0)" : "inset(0 0 0 0)",
        transitionEnd: {
          display: loaded ? "none" : "block"
        }
      }}
      transition={{
        duration: 2,
        delay: 2,
        ease
      }}
    >
      <AnimateSharedLayout transition={{ duration: 2 }}>
        <Nav loaded={loaded} />
        <Logo loaded={loaded} onClick={() => toggle(!loaded)} />
      </AnimateSharedLayout>
    </Hero>
  );
}

const Hero = styled(motion.div)`
  width: 100%;
  height: 1200px;
  background-color: #000;
  z-index: 99;
  position: absolute;
  top: 0;
`;
