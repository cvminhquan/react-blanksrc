import classNames from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div className={classNames(styles.wrapperForm,'control-group')}>
          <ul className={classNames(styles["categories-filter"], 'animate-dropdown')}>
          </ul>
          <input className={styles['search-field']} placeholder='Search here...' />
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" />
        </div>
      </form>
    </div>
  )
}

export default Search
