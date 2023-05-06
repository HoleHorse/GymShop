import "./authbtn.style.scss"

function LoginBtn() {
  return (
    <a className="button is-danger" href="/login" style={{fontSize: 20}}>
      Log in
    </a>
  );
}

export default LoginBtn;
