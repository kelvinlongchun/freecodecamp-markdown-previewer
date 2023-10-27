import { FC, ReactNode } from "react";
import TextContextWrapper from "../TextContent";

const GlobalWrapper: FC<{ children: ReactNode }> = (props) => {
  return <TextContextWrapper>{props.children}</TextContextWrapper>;
};

export default GlobalWrapper;
