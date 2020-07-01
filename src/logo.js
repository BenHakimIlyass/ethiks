import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
const ease = [0.6, 0.05, -0.01, 0.9];

export default function Logo({ loaded, ...props }) {
  return (
    <Wrapper {...props}>
      <AnimatePresence>
        {!loaded && (
          <Brand
            layoutId="logo"
            height={window.innerHeight / 2.5}
            animate
            transition={{ duration: 2, ease }}
          >
            .Ethiks
          </Brand>
        )}
      </AnimatePresence>
      <Loading
        animate={{
          opacity: loaded ? 0 : 0.6,
          transitionEnd: {
            display: loaded ? "none" : "block"
          }
        }}
      >
        Loading...
      </Loading>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 80px;
  margin: 0 auto;
`;
const Brand = styled(motion.h1)`
  font-size: 24px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  text-align: center;
  margin: ${props => props.height}px auto 5px auto;
  color: white;
  z-index: 99;
`;
const Loading = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: white;
  position: absolute;
  top: ${window.innerHeight / 2 + 16}px;
`;
