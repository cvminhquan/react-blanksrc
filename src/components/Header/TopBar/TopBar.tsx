import React from 'react';
import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const TopBar: React.FC = (props) => {
  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className="row">
          <div className={classNames(styles.topBarInner, 'flex-row',"col-md-12")}>
            <div className={classNames(styles.topBarLeft, 'column')}>
              <ul className={styles.listTopBar}>
                <li>
                  <Link to="">English</Link>
                </li>
                <div className={styles['border-1']}></div>
                <li>
                  <Link to="">Country</Link>
                </li>
                <li>
                  <Link to="">Newsletter</Link>
                </li>
                <li>
                  <Link to="">Newsletter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default TopBar;