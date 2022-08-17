import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}