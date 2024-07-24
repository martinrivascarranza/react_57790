import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((products) => {
        setProducts(products);
      });
    }
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="alert alert-primary text-center" role="alert">
            {greeting} {categoryId && `- Category: ${categoryId}`}
          </div>
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;

