import Head from 'next/head';
import { fetchBook, fetchBooks } from '../../services/api'
import styles from '../../styles/books/Show.module.css'

function Show({book}) {
  const { title, author, sinopsis } = book
  return (
    <>
      <Head>
        <title>{title} | Querifier</title>
      </Head>
      <h1 className={styles.mainTitle}>{title}</h1>
      <h2>{author.name}</h2>
      <p>{sinopsis}</p>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const book = await fetchBook(params.id);
  return {
    props: { book },
    revalidate: 60 * 60
  }
}

export async function getStaticPaths () {
  // For the sake of simplicity, just the first page is statically generated.
  // If needed, it's possible to generate the full set of books by 
  // iterating the different pages or by querying directly the db 
  // if the Next.js server had access
  const books = await fetchBooks();
  return {
    paths: books.map(({id}) => ({ params: { id: id.toString() } })),
    fallback: false,
  }
}

export default Show