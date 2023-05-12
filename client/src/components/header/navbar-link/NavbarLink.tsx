type Props = {
  text: string;
  href: string;
  img: string;
};

function NavbarLink({ text, href, img }: Props) {
  return (
    <a className="navbar-item" href={href}>
      <div style={{ display: "flex" }}>
        <img src={img} alt="" style={{ marginRight: 10 }} />
        {text}
      </div>
    </a>
  );
}

export default NavbarLink;
