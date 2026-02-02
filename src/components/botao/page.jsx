"use client";

export default function AddToCartButton({ product }) {

  function handleAddToCart() {
    console.log("Produto recebido:", product);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produto adicionado ao carrinho 🛒");
  }

  return (
    <button
      className="btn btn-outline-secondary btn-lg px-4"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  );
}
