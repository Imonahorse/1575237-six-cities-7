import React from 'react';
import styles from './error-message.css';

function ErrorMessage() {
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorText}>Сервер не отвечает, попробуйте позже</p>
    </div>
  );
}

export default ErrorMessage;
