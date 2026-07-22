import { createContext, useContext, useState } from "react";

const EmotionContext = createContext();

export function EmotionProvider({ children }) {

  const [text, setText] = useState("");

  const [result, setResult] = useState(null);

  const [faceResult, setFaceResult] = useState(null);

  const [multiResult, setMultiResult] = useState(null);

  const [history, setHistory] = useState([]);

  return (

    <EmotionContext.Provider
      value={{
        text,
        setText,
        result,
        setResult,
        faceResult,
        setFaceResult,
        multiResult,
        setMultiResult,
        history,
        setHistory,
      }}
    >
      {children}
    </EmotionContext.Provider>

  );
}

export function useEmotion() {
  return useContext(EmotionContext);
}