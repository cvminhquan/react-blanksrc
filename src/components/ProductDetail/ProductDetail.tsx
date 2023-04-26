import React from 'react';
import styles from './ProductDetail.module.scss';
import p5 from './../../assets/img/p5.jpg'

const ProductDetail: React.FC = (props) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-3">
          <div className={styles.hotDealWrapper}>
            <h3 className={styles.hotDealTitle}>Hot Deal</h3>
            <div className={styles.productHotDeal}>
              <div className={styles.productImage}>
                <img src={p5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">âsds</div>
      </div>
    </div>
  );
}

export default ProductDetail;