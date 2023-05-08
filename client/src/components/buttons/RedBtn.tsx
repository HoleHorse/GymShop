import "./btn.style.scss";

interface BtnProps {
  text: string;
  href: string;
}

function LoginBtn({ text, href }: BtnProps) {
  return (
    <a className="button is-danger" href={href} style={{ fontSize: 20 }}>
      {text}
    </a>
  );
}

export default LoginBtn;
