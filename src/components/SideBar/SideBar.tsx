import React, { useState } from 'react'
import styles from './SideBar.module.scss'
import { listCategories } from '~/data/listCategories'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const SideBar: React.FC = (props) => {
  const parentCategories = listCategories.filter((item) => item.parentId === null)

  const [openCategoryIds, setOpenCategoryIds] = useState<number[]>([])

  const toggleCategory = (categoryId: number) => {
    setOpenCategoryIds(prevState => {
      if (prevState.includes(categoryId)) {
        return prevState.filter(id => id !== categoryId)
      } else {
        return [...prevState, categoryId]
      }
    })
  }

  return (
    <div className={styles.sideBar}>
      <ul className={styles.listCategories}>
        {parentCategories.map((category) => {
          const isCategoryOpen = openCategoryIds.includes(category.id);
          return (
            <li key={category.name} className={classNames(styles.parentCategories, 'position-relative')}>
              <div className='d-flex justify-content-between align-items-center'>
                <Link className={styles.categoryName} to={`/category/${category.keyword}`}>{category.name}</Link>
                <span className={styles.toggleArrow + ' ' + (isCategoryOpen ? styles.open : '')} onClick={() => toggleCategory(category.id)} >
                  <MdOutlineKeyboardArrowDown size={25}/>
                </span>
              </div>
              <ul className={classNames(styles.subMenu, { [styles.open]: isCategoryOpen })}>
                <li className={styles.subMenuItem}>
                  <div className='row'>
                    {listCategories
                      .filter((item) => item.parentId === category.id)
                      .map((subCategory) => (
                        <div className='' key={subCategory.id}>
                          <Link to={`/category/${subCategory.keyword}`}>{subCategory.name}</Link>
                        </div>
                      ))}
                  </div>
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar;
