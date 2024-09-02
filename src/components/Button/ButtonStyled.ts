import styled from "styled-components";

const ButtonStyled = styled.button`
  position: relative;
  overflow: hidden;
  background-color: ${({ color }) => color};
  color: #efefef;
  border-style: none;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s;

  &:active {
    transform: scale(0.9);
  }

  & > .ripple {
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

export default ButtonStyled;
