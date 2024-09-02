import { useState } from "react";
import { ButtonProps, RippleState } from "./ButtonTypes";
import ButtonStyled from "./ButtonStyled";

function Button({ children, color }: ButtonProps) {
  const [ripples, setRipples] = useState<Array<RippleState>>([]);
  const [nextId, setNextId] = useState<number>(0);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const { offsetX, offsetY } = event.nativeEvent;

    setRipples((prevRipples) => [
      ...prevRipples,
      { id: nextId, offsetX, offsetY },
    ]);
    setNextId((prevId) => prevId + 1);

    console.log(ripples);
  }

  const handleAnimationEnd = (id: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.id !== id)
    );
  };

  return (
    <ButtonStyled color={color} onClick={handleClick}>
      {children}

      {ripples.map(({ id, offsetX, offsetY }) => (
        <span
          key={id}
          className="ripple"
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

export default Button;
