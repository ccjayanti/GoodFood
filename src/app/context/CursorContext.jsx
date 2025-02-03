"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorColor, setCursorColor] = useState("white");
  return (
    <CursorContext.Provider value={{ cursorColor, setCursorColor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
