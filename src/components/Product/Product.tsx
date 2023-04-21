import React from 'react';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';
import classNames from 'classnames';
interface ProductProps {
  id: number;
  name: string;
  price: number;
}
const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  return (
    <div className='col-lg-3'>
      <div className={classNames(styles["product-item"])}>
        <div className={styles["product-info"]}>
          <Link to="" className={styles['product-photo']}>
            <span className={styles.productContainer}>
              <img src="https://baya.vn/media/catalog/product/cache/a87c63fd4e95b1606c03c9c7999fa76e/m/i/microsoftteams-image_1__4.png" alt="" />
            </span>
          </Link>
          <div className={styles["product-item-detail"]}>
            <h2 className={styles.productTitle}>{name}</h2>
            <Link className={styles.productBrand} to="">
              <strong>
                Julianne
              </strong>
            </Link>
            <div className={styles.priceBox}>
              4.490.000
            </div>
            <div className={styles["product-item-inner"]}>
              <div className={styles.productAction}>
                <div className='display-inline-block'>
                  <Link to="" className={styles.actionWhishlist} >
                    <IoHeart size={25} />
                  </Link>
                </div>
                <div className={styles.actionAdd}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Product;