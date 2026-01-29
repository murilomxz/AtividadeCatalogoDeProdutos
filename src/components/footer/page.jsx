export default function Footer() {
    return (
      <footer className="mt-5 border-top bg-light">
        <div className="container py-3">
          <p className="text-center text-muted mb-0">
            © {new Date().getFullYear()} Produtos catalogados. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  }
  