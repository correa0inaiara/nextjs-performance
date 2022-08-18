import { Button } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button variant='contained'>Test</Button>
    </div>
  )
}

export default Home
