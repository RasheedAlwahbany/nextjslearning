import styles from '../../styles/Home.module.css';
import  Header from '../main_control/header';
import { Fragment } from 'react';
import NewsList from '../main_control/news_list';
const newsData=[
  {Id:1,Title:"News 1",Image:"data:image/jpeg;base64,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"}
]
export default function News() {
  return (
    <Fragment>
    <div className={styles.container}>
     <title>News Page</title>
     <h1>News Page</h1>
      <Header/>
      <NewsList newsData={newsData}/>
    </div>
    </Fragment>
  )
}
