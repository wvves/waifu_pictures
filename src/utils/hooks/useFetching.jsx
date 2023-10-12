import { useCallback, useState } from 'react';

export const useFetching = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = useCallback(async (callback) => {
    try {
      setIsLoading(true);
      await callback();
    } catch(error) {
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  }, [])
  
  return [fetching, isLoading, error]
};