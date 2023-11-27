import React, { useState } from 'react';

import './App.css';
import { IProduct } from './interfaces/IProduct';
import ProdcutComponent from './components/prodcut';
function App() {

  const HandleAddToCart = (id: number) => {
    console.log("Product id " + id + " clicked Now")
  }
  const [products, setProducts] = useState<IProduct[]>([
    {
      Id: 1,
      name: "First One"
    },
    {
      Id: 2,
      name: "Second One"
    },
    {
      Id: 3,
      name: "thrid One"
    },
  ])
  return (
    <div className="App">
      {
        products.map((item) => {
          return <ProdcutComponent product={item} key={item.Id} HandleAddToCart={HandleAddToCart} />
        })
      }
    </div>
  );
}

export default App;
