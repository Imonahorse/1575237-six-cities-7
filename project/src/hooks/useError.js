import React, {useEffect, useState} from 'react';
import ErrorMessage from '../components/error-message/error-message.jsx';

function useError(errorStatus) {
  const [isVisibleState, setIsVisibleState] = useState(false);

  useEffect(()=>{
    if(errorStatus.isError && !errorStatus.isLoading) {
      setIsVisibleState(true);

      setTimeout(() => {
        setIsVisibleState(false);
      }, 4000);
    }
  }, [errorStatus]);

  return !isVisibleState ? <ErrorMessage/> : null;
}

export default useError;
