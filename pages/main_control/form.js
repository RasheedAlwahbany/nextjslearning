import styles from '../../styles/Home.module.css';
import Link  from 'next/link';
import {useRef} from 'react';

export default function Form(props) {
  const idInputRef=useRef()
  const titleInputRef=useRef()
  const imageInputRef=useRef()
  function submitHandler(event){
      event.preventDefault();
      const id=idInputRef.current.value;
      const title=titleInputRef.current.value;
      const image=imageInputRef.current.value;
      const data={
          Id:id,Title:title,Image:image
      }
      props.onAdd(data);
  }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Id</label>
                    <input type='number' ref={idInputRef} />
                </div>
                <div>
                    <label>Title</label>
                    <input type='text' ref={titleInputRef} />
                </div>
                <div>
                    <label>Image</label>
                    <input type='text' ref={imageInputRef} />
                </div>
                <div>
                    <input type='submit' value="Submit"/>
                </div>
            </form>
        </div>
  )
}
