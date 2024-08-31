import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";

export default styled.button<ButtonProps>`
  overflow: hidden;
  position: relative;
  user-select: none;
  padding: 12px 24px;
  min-width: 144px;
  border-radius: 4px;
  border-style: none;
  outline: none;
  background-color: ${({ style }) => style?.background};
  color: ${({ style }) => style?.textColor};
  font-size: 0.9rem;
  font-weight: 500;

  & > .ripple-effect {
    position: absolute;
    background-color: #f4f4f540;
    height: 10%;
    aspect-ratio: 1 / 1;
    animation: rippleEffect linear 750ms forwards;
    animation-delay: 100ms;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
  }

  @keyframes rippleEffect {
    to {
      transform: scale(100);
      opacity: 0%;
    }
  }
`;
