import { FC, ReactNode, createContext, useContext } from "react";
import useTextReducer, { TextAction } from "./textReducer";

interface TextContextType {
  text: string;
  textDispatch: React.Dispatch<TextAction>;
}

interface Props {
  children: ReactNode;
}

const TextContext = createContext<TextContextType | {}>({});

const useTextContext = () => useContext(TextContext) as TextContextType;

const TextContextWrapper: FC<Props> = (props) => {
  const [text, textDispatch] = useTextReducer();

  return (
    <TextContext.Provider value={{ text, textDispatch }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextContextWrapper;
export { useTextContext };
