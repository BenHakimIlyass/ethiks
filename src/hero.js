import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Stack from "./utils/stack";

const Quote =
  "We’re a team who like to solve problems creatively using code and design.";

const Split = e => e.split("");

const variants = {
  full: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  empty: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const itemsVariants = {
  full: {
    y: 0,
    opacity: 1,

    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  empty: {
    y: 100,
    opacity: 0,

    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const ParagraphProps = delay => ({
  initial: "hidden",
  animate: "visible",
  transition: { duration: 1, delay },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -40, opacity: 0 }
  }
});
export default function Hero({ delay, ...props }) {
  return (
    <Container {...props}>
      <Stack space={3}>
        <motion.div
          variants={variants}
          initial="empty"
          animate="full"
          transition={{ duration: 1 }}
          style={{ width: "100%", maxWidth: 477 }}
        >
          {Split(Quote).map((item, i) => (
            <WrapLetter letter={item} delay={delay} index={i} />
          ))}
        </motion.div>
        <Box>
          <Devider />
          <div>
            <P {...ParagraphProps(delay)}>
              We’re based in
              <b> Tangier, Morocco</b>
            </P>
            <P {...ParagraphProps(delay)}>
              We create
              <b> digital products </b>
              in the web
            </P>
          </div>
        </Box>
      </Stack>
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
`;
