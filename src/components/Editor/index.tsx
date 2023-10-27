import { FormEventHandler } from "react";
import "./styles.scss";
import { useTextContext } from "../../contexts/TextContent";

const Editor = () => {
  const { text, textDispatch } = useTextContext();

  const handleInput: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    const value = element.value;
    textDispatch({ type: "CHANGE_TEXT", text: value });
  };

  return (
    <div className="editor-container">
      <textarea
        id="editor"
        onInput={handleInput}
        defaultValue={text}
      ></textarea>
    </div>
  );
};

export default Editor;
