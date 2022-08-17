import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Product = ({
  id,
  title
}) => {
  return (
    <article className={styles.book}>
      <Link href={`/books/${id}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
    </article>
  )
}

export default Product