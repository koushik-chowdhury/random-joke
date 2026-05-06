import { useEffect, useState } from 'react';
import { fetchRandomJoke } from '../api/jokeApi';

export const useJoke = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadJoke = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await fetchRandomJoke();
      setJoke(data);
    } catch {
      setError('Failed to load joke');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return {
    joke,
    loading,
    error,
    loadJoke,
  };
};
