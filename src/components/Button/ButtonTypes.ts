export interface ButtonProps {
  children?: React.ReactNode;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  style?: {
    background?: string;
    textColor?: string;
  };
}

export interface RippleState {
  id: number;
  offsetX: number;
  offsetY: number;
}
