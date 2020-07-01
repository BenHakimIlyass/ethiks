import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ loaded, isBlack }) {
  return (
    <Container>
      <Header
        animate={{
          clipPath: loaded ? "inset(100% 0 0 0)" : "inset(100% 0 0 0)"
        }}
        transition={{
          duration: 2,
          delay: 2
        }}
      >
        <AnimatePresence>
          {loaded && (
            <Logo layoutId="logo" animate isBlack={isBlack}>
              <span style={{ color: "#9FB3C8" }}>.Ethi</span>ks
            </Logo>
          )}
        </AnimatePresence>
        {loaded && (
          <Box
            initial="hidden"
            animate="visible"
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
            transition={{ duration: 4 }}
          >
            <Link isBlack={isBlack}>Blog</Link>
            <Link isBlack={isBlack}>Contact</Link>
          </Box>
        )}
      </Header>
    </Container>
  );
}
const Header = styled.nav`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(motion.h1)`
  font-size: 24px;
  font-weight: 900;
  width: 80px;
  text-align: left;
  font-family: "Inter", sans-serif;
  color: ${props => (props.isBlack ? "#102a43" : "#fff")};
`;
const Link = styled.button`
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: ${props => (props.isBlack ? "#102a43" : "#fff")};
`;
const Box = styled(motion.div)`
  display: flex;
  width: 140px;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 80%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 16px;
`;
