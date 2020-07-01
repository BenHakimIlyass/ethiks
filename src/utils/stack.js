import styled, { css } from "styled-components";

const spaceGenerator = ({ space }) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  & > * + * {
    margin-top: ${space}rem !important;
  }
`;

const splitHandler = ({ splitAfter }) =>
  splitAfter &&
  css`
    &:only-child {
      height: 100%;
    }
    & > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }
  `;

const Stack = styled.div`
  position: relative;
  ${spaceGenerator}
  ${splitHandler}
`;

export default Stack;
