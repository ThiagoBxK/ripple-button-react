import React, { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  background: string;
  color: string;
}

const ButtonStyled = styled.button<ButtonProps>`
  overflow: hidden;
  position: relative;
  user-select: none;
  padding: 12px 24px;
  min-width: 144px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.9rem;
  font-weight: 500;

  &:active {
    transform: scale(0.995);
  }

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
    100% {
      transform: scale(100);
      opacity: 0%;
    }
  }
`;

interface RippleState {
  id: number;
  offsetX: number;
  offsetY: number;
}

export default function Button({ children, background, color }: ButtonProps) {
  const [ripples, setRipples] = useState<Array<RippleState>>([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    const newRipple: RippleState = {
      id: nextId,
      offsetX,
      offsetY,
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
    setNextId((prevId) => prevId + 1);
  };

  const handleAnimationEnd = (id: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.id !== id)
    );
  };

  return (
    <ButtonStyled onClick={handleClick} background={background} color={color}>
      {children}
      {ripples.map(({ id, offsetX, offsetY }) => (
        <span
          key={id}
          className="ripple-effect"
          style={{
            left: offsetX,
            top: offsetY,
          }}
          onAnimationEnd={() => handleAnimationEnd(id)}
        />
      ))}
    </ButtonStyled>
  );
}
