import styles from './layout.module.css'
export default function Layout({ children }) {
  // return <div>{children}</div>
  return <div className={styles.container}>{children}</div>
}
