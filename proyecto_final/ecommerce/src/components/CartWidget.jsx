import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


function CartWidget() {
  const itemCount = 5; 

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge badge-pill badge-danger ml-2">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
