import styles from '../styles/Home.module.css'

import Product from '../components/Product'
import { useEffect, useState } from 'react'
import { fetchBooks } from '../services/api'
import Head from 'next/head'

function Home(props) {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(props.books)

  useEffect(() => {
    // TODO: This fetch call could be debounced in case the user inputs too frequently
    const controller = new AbortController();
    fetchBooks(search, controller.signal)
      .then(newBooks => setBooks(newBooks))

    return () => controller.abort()
  }, [search])

  return (
    <>
      <Head>
        <title>Querifier</title>
      </Head>
      <h1 className={styles.mainTitle}>Books</h1>
      <input className={styles.search} 
              type="text" value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
      />
      <section className={styles.grid}>
        {books.map((book) => (
          <Product key={book.id} {...book}/>
        ))}
      </section>
    </>
  )
}

export async function getStaticProps () {
  // For the sake of simplicity, pagination was not included in this project.
  // Just page 1 is rendered
  const books = await fetchBooks()

  return { 
    props: {
      books
    },
    revalidate: 60 * 60
  }
}

export default Home