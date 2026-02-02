

import AddToCartButton from "@/components/botao/page";
import Link from "next/link";

export default async function ProdutoPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <section className="py-5 bg-light">
      <div className="container">

      
        <Link href="/" className="btn btn-link mb-4 text-decoration-none">
          ← Voltar para produtos
        </Link>

        <div className="row align-items-start g-5">

          <div className="col-12 col-md-6">
            <div className="bg-white p-4 rounded-4 shadow-sm text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "450px", objectFit: "contain" }}
              />
            </div>
          </div>

         
          <div className="col-12 col-md-6">

           
            <div className="mb-2">
              <span className="badge bg-secondary me-2">
                {product.brand}
              </span>
              <span className="badge bg-light text-dark border">
                {product.category}
              </span>
            </div>

           
            <h1 className="fw-bold mb-3">
              {product.title}
            </h1>

        
            <div className="mb-3 text-warning">
              {"★".repeat(Math.round(product.rating))}
              <span className="text-muted ms-2">
                ({product.rating})
              </span>
            </div>

          
            <p className="text-muted fs-5">
              {product.description}
            </p>

          
            <div className="my-4">
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <span className="fs-2 fw-bold text-success">
                  R$ {Number(product.price).toFixed(2)}
                </span>

                <span className="badge bg-danger fs-6">
                  -{product.discountPercentage}% OFF
                </span>
              </div>

              <small className="text-muted">
                Em até 12x sem juros
              </small>
            </div>

          
            <p className={`fw-semibold ${product.stock > 0 ? "text-success" : "text-danger"}`}>
              {product.stock > 0
                ? `✔ Em estoque (${product.stock} unidades)`
                : "✖ Produto indisponível"}
            </p>

           
            <div className="d-flex gap-3 flex-wrap mt-4">
  <button className="btn btn-primary btn-lg px-5">
    Comprar agora
  </button>

  <AddToCartButton product={product} />
</div>

            <hr className="my-5" />

         
            <ul className="list-unstyled text-muted fs-6">
              <li className="mb-2">✔ Produto original com nota fiscal</li>
              <li className="mb-2">✔ Envio rápido para todo o Brasil</li>
              <li className="mb-2">✔ Garantia direto com o fabricante</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}
