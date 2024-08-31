import React, { useState } from "react";
import { ButtonProps, RippleState } from "./ButtonTypes";
import ButtonStyled from "./ButtonStyled";

export default function Button({ onClick, children, style }: ButtonProps) {
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

    if (onClick) onClick(event);
  };

  const handleAnimationEnd = (id: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.id !== id)
    );
  };

  return (
    <ButtonStyled onClick={handleClick} style={style}>
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
