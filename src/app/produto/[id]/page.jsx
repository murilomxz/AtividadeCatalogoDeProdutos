import Link from "next/link";

export default async function ProdutoPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    { cache: "no-store" }
  );

  const product = await res.json();

  return (
    <section className="py-5 ">
      <div className="container">

        {/* Voltar */}
        <Link href="/" className="btn btn-link mb-4 text-decoration-none">
          ← Voltar para produtos
        </Link>

        <div className="row align-items-start g-5">

          {/* Imagem */}
          <div className="col-12 col-md-6">
            <div className="bg-white p-4 rounded-3 shadow-sm text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Informações */}
          <div className="col-12 col-md-6">

            <h1 className="fw-bold mb-3">
              {product.title}
            </h1>

            <p className="text-muted fs-5">
              {product.description}
            </p>

            <div className="my-4">
              <span className="fs-2 fw-bold text-success">
                R$ {Number(product.price).toFixed(2)}
              </span>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-primary btn-lg px-5">
                Comprar agora
              </button>

              <button className="btn btn-outline-secondary btn-lg px-4">
                Adicionar ao carrinho
              </button>
            </div>

            <hr className="my-5" />

            {/* Infos extras */}
            <ul className="list-unstyled text-muted">
              <li>✔ Produto original</li>
              <li>✔ Envio rápido</li>
              <li>✔ Garantia de fábrica</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}
