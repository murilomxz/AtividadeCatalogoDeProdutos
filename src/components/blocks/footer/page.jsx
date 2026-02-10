export default function Footer() {
  return (
    <footer
      className="mt-auto text-light"
      style={{
        background: "linear-gradient(135deg, #4D2FB2, #3a2390)"
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center text-center text-md-start">

          {/* Texto */}
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <p className="mb-0 small">
              © {new Date().getFullYear()} Produtos Catalogados
            </p>
          </div>

          {/* Direitos */}
          <div className="col-12 col-md-6 text-md-end">
            <p className="mb-0 small opacity-75">
              Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
