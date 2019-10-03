import React from 'react';
import Swirly from '../components/swirly';
import styles from './panelBase.css';

const PanelBase = (props) => (
  <React.Fragment>
    <div className={styles.viewboxCenter}>
      <div className={styles.panel}>
        {props.children}
      </div>
    </div>
    <Swirly className={styles.backgroundSwirly} color={'#663446'}/>
  </React.Fragment>
);

export default PanelBase;
