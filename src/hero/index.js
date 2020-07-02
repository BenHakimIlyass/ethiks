import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Stack from "../utils/stack";
import Fences from "./Fences";
import { variants, itemsVariants, ParagraphProps } from "./variants";

const Quote =
  "We’re a team who like to solve problems creatively using code and design.";
const Split = e => e.split("");

export default function Hero({ delay, ...props }) {
  return (
    <Container {...props}>
      <Stack space={3}>
        <motion.div
          variants={variants(delay)}
          initial="empty"
          animate="full"
          transition={{ duration: 1, delayChildren: 5 }}
          style={{ width: "100%", maxWidth: 477 }}
        >
          {Split(Quote).map((item, i) => (
            <WrapLetter letter={item} delay={delay} index={i} />
          ))}
        </motion.div>
        <Box>
          <Devider />
          <div>
            <P {...ParagraphProps(delay + 1)}>
              We’re based in
              <b> Tangier, Morocco</b>
            </P>
            <P {...ParagraphProps(delay + 1)}>
              We create
              <b> digital products </b>
              in the web
            </P>
          </div>
        </Box>
      </Stack>

      <Fences delay={delay} />
    </Container>
  );
}

const WrapLetter = ({ letter, delay }) => (
  <H1 transition={{ duration: 1, delay }} variants={itemsVariants}>
    {letter}
  </H1>
);

const H1 = styled(motion.span)`
  color: #102a43;
  font-size: 36px;
  font-weight: 900;
  line-height: 1.2;
`;
const Box = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled(motion.p)`
  color: #829ab1;
  b {
    font-weight: bold;
    color: #102a43;
  }
`;
const Devider = styled.div`
  border-left: 4px solid;
  border-color: #102a43;
  height: 60px;
`;
const Container = styled.div`
  width: 80%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 16px;
  transform: translate3d(0px, 160px, 0);
  display: flex;
  justify-content: space-between;
`;
