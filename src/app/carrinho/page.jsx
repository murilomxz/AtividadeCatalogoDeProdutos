"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  function removeItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h1 className="fw-bold mb-4">🛒 Seu carrinho</h1>

        {cart.length === 0 ? (
          <p>
            Carrinho vazio.{" "}
            <Link href="/">Voltar para produtos</Link>
          </p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.title}</strong>
                    <br />
                    <span className="text-muted">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeItem(index)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="fw-bold">
              Total: R$ {total.toFixed(2)}
            </h4>

            <div className="mt-4 d-flex gap-3">
              <Link href="/" className="btn btn-outline-secondary">
                Continuar comprando
              </Link>

              <button className="btn btn-success">
                Finalizar compra
              </button>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
