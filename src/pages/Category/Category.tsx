import React from 'react';
import { useParams } from 'react-router-dom';
import { listCategories } from '~/data/listCategories';

const Category: React.FC = (props) => {
  const { keyword } = useParams();
  const category = listCategories.find((cat) => cat.keyword === keyword);
  console.log(category);
  return (
    <div className='container'>
     <h1>{category?.name}</h1>
      
    </div>
  );
}

export default Category;