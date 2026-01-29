


export default function Navbar() {
  return (
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
style={{background:"#0E21A0"}}>
  {" "}
  <a
    href="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
  >
    {" "}
    <svg className="bi me-2" width={40} height={32} aria-hidden="true">
      <use xlinkHref="#bootstrap" />
    </svg>{" "}
    <span className="fs-4 text-light">MarketPlace</span>{" "}
  </a>{" "}
  <ul className="nav nav-pills">
    {" "}
    <li className="nav-item">
      <a href="#" className="nav-link text-light fw-bold" aria-current="page">
        Produtos
      </a>
    </li>{" "}
    <li className="nav-item ">
      <a href="#" className="nav-link text-light fw-bold">
        Sobre
      </a>
    </li>{" "}

    <li className="nav-item">
      <a href="#" className="nav-link text-light me-3 fw-bold">
        Dúvidas
      </a>
    </li>{" "}
  </ul>{" "}
</header>
  );
}
