import classNames from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styles from './Search.module.scss'
import { FiSearch } from 'react-icons/fi';
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
        <div className={classNames(styles.wrapperForm, 'control-group', 'd-flex')}>
          <input className={styles['search-field']} placeholder='Search here...' />
          <button type='submit' className={classNames(styles.searchsubmit,'d-flex align-items-center')}>
            <FiSearch color='gray'/>
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
