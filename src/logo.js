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
            transition={{ duration: 1, ease }}
          >
            <span style={{ color: "#9FB3C8" }}>.Ethi</span>ks
          </Brand>
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          opacity: loaded ? 0 : 0.2,
          transitionEnd: {
            display: loaded ? "none" : "block"
          }
        }}
      >
        <Loading
          animate={{ opacity: 1 }}
          transition={{ from: 0, flip: Infinity, duration: 1 }}
        >
          Loading...
        </Loading>
      </motion.div>
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
  color: #bcccdc;
  position: absolute;
  top: ${window.innerHeight / 2 + 22}px;
`;
