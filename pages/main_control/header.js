import styles from '../../styles/Home.module.css'
import Link  from 'next/link'

export default function Header() {
  return (
    <div className={styles.container}>
     
     <ul>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/news">News</Link></li>
     </ul>

    </div>
  )
}
