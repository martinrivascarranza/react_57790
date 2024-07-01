import React from 'react';


function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="alert alert-primary text-center" role="alert">
            {greeting}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
