import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '~/components/Product/Product';
import { listCategories } from '~/data/listCategories';

const Category: React.FC = (props) => {
  const { keyword } = useParams();
  const category = listCategories.find((cat) => cat.keyword === keyword);
  const products = [
    { id: 1, name: 'Table', price: 231112 },
    { id: 2, name: 'Chair', price: 7899 },
    { id: 3, name: 'Sofa', price: 120000 },
    { id: 4, name: 'Sofa', price: 120000 },
    { id: 4, name: 'Sofa', price: 120000 },
    { id: 4, name: 'Sofa', price: 120000 },
    { id: 4, name: 'Sofa', price: 120000 },
    { id: 4, name: 'Sofa', price: 120000 },
    // Add more products here as needed
  ];
  return (
    <div className='container'>
     <h1>{category?.name}</h1>
     <div className='row gx-3 gy-3'>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
}

export default Category;