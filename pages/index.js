import styles from '../styles/Home.module.css'

import Product from '../components/Product'

function Home({books}) {
  return (
    <div>
      <main className={styles.main}>

        <h1 className={styles.mainTitle}>Books</h1>
        <section className={styles.grid}>
          {books.map((book) => (
            <Product key={book.id} {...book}/>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch('https://querifier-demo.herokuapp.com/v1/books?page=1&filter[where][title]=Season&filter[order][id]=desc')

  const books = await response.json();
  return { 
    props: {
      books
    },
    revalidate: 60 * 60
  }
}

export default Home