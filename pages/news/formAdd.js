import styles from '../../styles/Home.module.css';
import  Header from '../main_control/header';
import { Fragment } from 'react';
import Form from '../main_control/form';

export default function News() {
    function addHandler(data){
        alert(data.Title);
    }
  return (
    <Fragment>
    <div className={styles.container}>
     <title>News Page</title>
     <h1>News Page</h1>
      <Header/>
      <Form onAdd={addHandler}/>
    </div>
    </Fragment>
  )
}
