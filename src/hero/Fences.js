import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Fence = styled(motion.div)`
  background-color: ${props => props.styles[1]};
  height: ${props => props.styles[2]}px;
  margin: 15px 0px;
  align-self: flex-end;
  border-radius: 5px;
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  width: ${props => props.styles[0]};
  display: flex;
  justify-content: space-between;
  margin-right: 0px;
  margin-left: auto;
`;

const Props = (delay, width) => ({
  variants: {
    before: { opacity: 0, width: 0 },
    after: { opacity: 1, width: width }
  },
  transition: { duration: 1, delay: delay, ease },
  initial: "before",
  animate: "after"
});
const ease = [0.6, 0.05, -0.01, 0.9];

const Fences = ({ delay }) => {
  return (
    <Wrapper>
      <WrapFence delay={delay + 2} wraps={3} styles={["80%", "#243B53", 25]} />
      <Fence styles={["60%", "#486581", 19]} {...Props(delay + 2.3, "60%")} />
      <WrapFence
        delay={delay + 2.2}
        wraps={3}
        styles={["100%", "#BCCCDC", 26]}
      />
      <WrapFence
        wraps={2}
        delay={delay + 2.4}
        styles={["40%", "#486581", 26]}
      />
      <Fence styles={["60%", "#627D98", 19]} {...Props(delay + 2.6, "60%")} />
      <Fence styles={["40%", "#BCCCDC", 28]} {...Props(delay + 2.8, "40%")} />
      <Fence styles={["25%", "#D9E2EC", 28]} {...Props(delay + 3, "25%")} />
      <Fence styles={["10%", "#F0F4F8", 28]} {...Props(delay + 3.2, "10%")} />
    </Wrapper>
  );
};
const handleWrap = i => (i === 2 ? "55%" : i === 1 ? "25%" : "10%");
const WrapFence = ({ wraps, delay, styles, ...props }) => (
  <Box {...props} styles={styles}>
    {new Array(wraps).fill("").map((_, i) => (
      <Fence
        styles={styles}
        variants={{
          before: { opacity: 0, width: 0 },
          after: { opacity: 1, width: handleWrap(i) }
        }}
        transition={{ duration: 1, delay: delay, ease }}
        initial="before"
        animate="after"
      />
    ))}
  </Box>
);
export default Fences;
