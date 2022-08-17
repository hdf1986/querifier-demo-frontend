import styles from '../styles/Home.module.css'

import Product from '../components/Product'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>

        <h1 className={styles.mainTitle}>Books</h1>
        <section className={styles.grid}>
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </div>
  )
}
