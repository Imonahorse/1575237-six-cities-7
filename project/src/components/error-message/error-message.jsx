import React from 'react';

const style = {
  zIndex: '1000',
  position: 'fixed',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  textAlign: 'center',
  fontSize: '25px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: 'red',
  padding: '10px 30px',
  borderRadius: '30px',
};

const pStyle = {
  margin: '0',
};

function ErrorMessage() {
  return (
    <div style={style}>
      <p style={pStyle}>Сервер не отвечает, попробуйте позже</p>
    </div>
  );
}

export default ErrorMessage;
