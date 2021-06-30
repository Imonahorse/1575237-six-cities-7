import React from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import cn from 'classnames';
import styles from './loading.module.css';
import {LoadingSize} from '../../const.js';

function Loading({size = LoadingSize.LARGE, styleClass = false}) {
  return (
    <div
      className={cn('sweet-loading',
        {
          [styleClass]: true,
          [styles.loadingDefault]: !styleClass,
        },
      )}
    >
      <PulseLoader color="#4481c3" size={size}/>
    </div>
  );
}

Loading.propTypes = {
  size: PropTypes.number,
  styleClass: PropTypes.string,
};

export default Loading;
