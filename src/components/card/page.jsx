import Link from "next/link";

export default function Card({ id, name, description, price, image }) {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <div className="bg-white rounded-xl shadow p-4 d-lg-flex d-md-flex">

        <div className="relative w-full h-40 mb-3 d-flex justify-content-center">
          <img src={image} alt="" />
        </div>

        <div className="d-flex flex-column align-items-start">
          <h2 className="text-black">{name}</h2>
          <p className="text-secondary">{description}</p>

          <div className="d-flex w-100 mt-auto align-items-center">
            <span className="fw-bold text-lg">
              R$ {price.toFixed(2)}
            </span>

            <Link
              href={`/produto/${id}`}
              className="btn btn-dark ms-auto fw-bold"
              style={{ background: "#4D2FB2" }}
            >
              Ver Mais
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
