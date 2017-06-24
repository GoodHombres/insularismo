import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import styles from './styles.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo />
          <h2>¡Bienvenidos a Insularismo!</h2>
        </div>
        <p className={styles.intro}>Un proyecto por Bad Hombres.</p>
      </div>
    );
  }
}

export default App;
