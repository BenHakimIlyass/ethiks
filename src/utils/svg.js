import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Circle = props => (
  <SvgBox {...props}>
    <svg
      width="263"
      height="263"
      viewBox="0 0 263 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="131.5" cy="131.5" r="131.5" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-3.8594e-06"
          y1="30.5"
          x2="227"
          y2="263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#627D98" />
          <stop offset="1" stop-color="#BCCCDC" />
        </linearGradient>
      </defs>
    </svg>
  </SvgBox>
);

const SvgBox = styled(motion.div)`
  transform: translate3d(0px, -100px, 0);
  width: 263px;
  height: 263px;
  background-image: linear-gradient(to right, #627d98, #bcccdc);
`;
