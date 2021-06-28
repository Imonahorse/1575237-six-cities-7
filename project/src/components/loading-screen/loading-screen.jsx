import React from 'react';
import {css} from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function LoadingScreen() {
  const loading = true;

  return (
    <div className="sweet-loading" style={style}>
      <PulseLoader color="#4481c3" loading={loading} css={override} size={65}/>
    </div>
  );
}


export default LoadingScreen;
