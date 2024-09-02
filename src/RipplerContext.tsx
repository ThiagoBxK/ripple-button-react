import { createContext, useState } from "react";

interface RipplerProps {
  children?: React.ReactNode;
}

interface RipplerContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RipplerContext = createContext<RipplerContextType | undefined>(
  undefined
);

export const RipplerProvider = ({ children }: RipplerProps) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <RipplerContext.Provider value={{ theme, setTheme }}>
      {children}
    </RipplerContext.Provider>
  );
};
