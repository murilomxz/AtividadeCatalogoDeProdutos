import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
}, []);
  return (
    <header
      className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      style={{ background: "#0E21A0" }}
    >
      <Link
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4 text-light">MarketPlace</span>
      </Link>

      <ul className="nav nav-pills align-items-center">
        <li className="nav-item">
          <Link href="/" className="nav-link text-light fw-bold">
            Produtos
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/sobre" className="nav-link text-light fw-bold">
            Sobre
          </Link>
        </li>

        <li className="nav-item mx-3 ">
          <Link href="/carrinho" className="btn btn-outline-light fw-bold">
            Carrinho 🛒
          </Link>
        </li>
      </ul>
    </header>
  );
}
