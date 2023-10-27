import { marked } from "marked";
import { useTextContext } from "../../contexts/TextContent";
import "./styles.scss";

marked.use({
  breaks: true,
});

const Preview = () => {
  const { text } = useTextContext();

  return (
    <div className="preview-container">
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
};

export default Preview;
