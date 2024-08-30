import React, { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
  click?: () => void;
  children?: React.ReactNode;
  rippleEffect?: boolean;
}

const ButtonStyled = styled.button`
  overflow: hidden;
  position: relative;
  user-select: none;
  padding: 12px 24px;
  min-width: 144px;
  border-radius: 16px;
  border: none;
  outline: none;
  background-color: #2563eb;
  color: #efefef;
  font-size: 0.9rem;

  & > .ripple-effect {
    position: absolute;
    background-color: #303030b5;
    height: 10%;
    aspect-ratio: 1 / 1;
    animation: rippleEffect linear 1000ms forwards;
    animation-delay: 100ms;
    border-radius: 50%;
    pointer-events: none;
  }

  @keyframes rippleEffect {
    0% {
      transform: scale(1);
      opacity: 100%;
    }
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

export default function Button({ children }: ButtonProps) {
  const [ripples, setRipples] = useState<Array<RippleState>>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    const ripple = {
      id: ripples.length,
      offsetX,
      offsetY,
    };

    setRipples((prevState: Array<RippleState>) => [...prevState, ripple]);

    // event.target.addEventListener("animationend", () => {
    //   setRipples((prevState: Array<RippleState>) => prevState.slice(1));
    // });
  };

  const handleAnimationEnd = (id: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.id !== id)
    );
  };

  return (
    <ButtonStyled onClick={handleClick}>
      {children}

      {ripples.map(({ id, offsetX, offsetY }, index) => {
        return (
          <span
            key={index}
            className="ripple-effect"
            onAnimationEnd={() => handleAnimationEnd(id)}
            style={{
              left: offsetX,
              top: offsetY,
            }}
          ></span>
        );
      })}
    </ButtonStyled>
  );
}
