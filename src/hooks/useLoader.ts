import React ,{useState} from 'react'

const useLoader = () => {
  
  const [loading,setLoading] =  useState(false);
  const startLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };
  return {loading,startLoading,closeLoading}
}

export default useLoader;