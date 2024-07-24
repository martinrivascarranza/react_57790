import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (itemId) {
      getProductById(itemId).then((product) => {
        setProduct(product);
      });
    }
  }, [itemId]);

  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
