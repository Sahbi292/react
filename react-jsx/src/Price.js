import React from 'react';
import product from './product.js';

function Price() {
  return <p className="text-success fw-bold">{product.price}</p>;
}

export default Price;