/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
        {parentCategories.map((category) => (
          <li key={category.name} className={classNames(styles.parentCategories, 'position-relative')}>
            <div className='d-flex justify-content-between align-items-center'>
              <Link to={`/category/${category.keyword}`}>{category.name}</Link>
              <span className={styles.toggleArrow} onClick={() => toggleCategory(category.id)} >
                <MdOutlineKeyboardArrowDown size={20}/>
              </span>
            </div>
            {openCategoryIds.includes(category.id) &&
              <ul className={styles.subMenu}>
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
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
