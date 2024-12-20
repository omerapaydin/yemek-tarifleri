import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ tarif }) {
  return (
    <div className="col-3 mb-3">
      <div className="card">
        <img src={`img/${tarif.resim}`} alt={tarif.baslik} />
        <div className="card-body">
          <h5 className="card-title">{tarif.baslik}</h5>
          <p className="aciklama">{tarif.aciklama}</p>
          <Link
            to={`/tarifler/${tarif.id}`}
            className="btn btn-outline-primary"
          >
            Tarifi İncele
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
