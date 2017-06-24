import React, { PureComponent } from 'react';
import logo from '../../assets/puerto-rico-main-map.svg';
import styles from './styles.module.css';

class Logo extends PureComponent {
  render() {
    return(
      <img src={logo} className={styles.logo} alt="logo" />
    );
  }
}

export default Logo;
