import React, {useEffect, useState} from 'react';
import ErrorMessage from '../components/error-message/error-message.jsx';

function useError(errorStatus) {
  const [state, setState] = useState(null);

  useEffect(()=>{
    if(errorStatus.isError && !errorStatus.isLoading) {
      setState(<ErrorMessage/>);

      setTimeout(() => {
        setState(null);
      }, 4000);
    }
  }, [errorStatus]);

  return state;
}

export default useError;
