import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Product = () => {
  return (
    <article className={styles.book}>
      <Link href={`/books/123`}>
        <h2>Titulo</h2>
      </Link>
    </article>
  )
}

export default Product