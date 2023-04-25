import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '~/components/Product/Product'
import SideBar from '~/components/SideBar/SideBar'
import { listCategories } from '~/data/listCategories'
import styles from './Category.module.scss'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Category: React.FC = (props) => {
  const { keyword } = useParams()
  const category = listCategories.find((cat) => cat.keyword === keyword)
  const products = [
    { id: 1, name: 'Table', price: 231112, keyword: 'abc' },
    { id: 2, name: 'Chair', price: 7899, keyword: 'abc' },
    { id: 3, name: 'Sofa', price: 120000, keyword: 'abc' },
    { id: 4, name: 'Sofa', price: 120000, keyword: 'abc' },
    { id: 5, name: 'Sofa', price: 120000, keyword: 'abc' },
    { id: 6, name: 'Sofa', price: 120000, keyword: 'abc' },
    { id: 7, name: 'Sofa', price: 120000, keyword: 'abc' },
    { id: 8, name: 'Sofa', price: 120000, keyword: 'abc' }
    // Add more products here as needed
  ]
  return (
    <>
      <div className='container my-20'>
        <div className={styles.breadcrumbs}>
          <ul className={styles.breadcrumbsItem}>
            <li className='item home'>
              <Link to='/' title='Đi đến trang chủ'>
                Home
              </Link>
            </li>
            <MdOutlineKeyboardArrowRight />
            <li className='item category3'>
              <strong>{category?.name}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.pageTitleWrapper}>
        <h1 className={styles.categoryTitle}>{category?.name}</h1>
        <ul>
          {}
        </ul>
      </div>
      <div className="container">
      <div className='row'>
        <div className='col-lg-3'>
          <SideBar />
        </div>
        <div className='col-lg-9'>
          <div className='row gx-3 gy-3'>
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Category
