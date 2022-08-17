import styles from '../../styles/books/Show.module.css'

function Show() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Book detail</h1>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {},
    revalidate: 60 * 3600
  }
}

export async function getStaticPaths () {
  // For the sake of simplicity, just the first page is statically generated.
  // If needed, it's possible to generate the full set of books by 
  // iterating the different pages or by querying directly the db 
  // if the Next.js server had access
  const response = await fetch(`https://querifier-demo.herokuapp.com/v1/books`)
  const books = await response.json()
  return {
    paths: books.map(({id}) => ({ params: { id: id.toString() } })),
    fallback: false,
  }
}

export default Show