import classNames from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styles from './Search.module.scss'
interface SearchFormData {
  query: string
}

const Search: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormData>({})

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className={styles['search-area']}>
      <form>
        <div className='control-group'>
          <ul className={classNames(styles["categories-filter"], 'animate-dropdown')}>
            <li className='dropdown'>
              <a className='dropdown-toggle' data-toggle='dropdown' href='category.html'>
                Categories <b className='caret'></b>
              </a>
              <ul className='dropdown-menu' role='menu'>
                <li className='menu-header'>Computer</li>
                <li role='presentation'>
                  <a role='menuitem' href='category.html'>
                    - Clothing
                  </a>
                </li>
                <li role='presentation'>
                  <a role='menuitem' href='category.html'>
                    - Electronics
                  </a>
                </li>
                <li role='presentation'>
                  <a role='menuitem' href='category.html'>
                    - Shoes
                  </a>
                </li>
                <li role='presentation'>
                  <a role='menuitem' href='category.html'>
                    - Watches
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <input className={styles['search-field']} placeholder='Search here...' />
          <Link className='search-button' to='#'></Link>
        </div>
      </form>
    </div>
  )
}

export default Search
