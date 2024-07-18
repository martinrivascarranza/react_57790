import React from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="alert alert-primary text-center" role="alert">
            {greeting} {categoryId && `- Category: ${categoryId}`}
          </div>
          {/* logic para el cart aqui ojo*/}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;

