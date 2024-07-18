import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="alert alert-secondary text-center" role="alert">
            Product Detail for Item ID: {itemId}
          </div>
          {/* logic para el detail del producto aqui ojo */}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
