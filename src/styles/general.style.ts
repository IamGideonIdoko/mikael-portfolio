import { css } from 'styled-components';

export const basePageStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #b4000b;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;
