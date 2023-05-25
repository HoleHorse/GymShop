import { MouseEventHandler } from "react";
import "./btn.style.scss";

interface BtnProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function LoginBtn({ text, onClick }: BtnProps) {
  return (
    <button
      className="button is-danger"
      onClick={onClick}
      style={{ fontSize: 20 }}
    >
      {text}
    </button>
  );
}

export default LoginBtn;
