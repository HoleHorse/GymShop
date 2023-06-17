import { useState } from "react";
import add from "../../../assets/add-outline.svg";
import remove from "../../../assets/remove-outline.svg";

interface question {
  question: string;
  answer: string;
}

function Question({ question, answer }: question) {
  const [display, setDisplay] = useState("none");
  const [btn, setBtn] = useState(add)
  function handleClick() {
    if (display === "none") {
      setDisplay("block");
      setBtn(remove)
    } else {
      setDisplay("none");
      setBtn(add);
    }
  }
  return (
    <div className="column">
      <article className="message has-text-left is-dark">
        <div className="message-header" onClick={handleClick}>
          <p>{question}</p>
          <img src={btn} alt="read" width={32} />
        </div>
        <div className="message-body" style={{ display: display }}>
          {answer}
        </div>
      </article>
    </div>
  );
}

export default Question;
