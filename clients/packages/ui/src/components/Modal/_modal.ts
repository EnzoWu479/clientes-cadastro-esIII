import styled from "styled-components";

export const BlackBackground = styled.div`
  background-color: #0004;
  position: fixed;
  inset: 0;
  /* z-index: 100; */
  backdrop-filter: blur(1px);
`;
export const ChidrenContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 101; */
`;