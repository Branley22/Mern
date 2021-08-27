import React from 'react';
import styles from './SubContents.module.css';

const SubContents = (props) =>{
  return(
    <div className={styles.subContents}>{ props.childen }
      SubContents
    </div>
  );
}

export default SubContents;