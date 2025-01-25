// hooks/useApi.js
import { useState, useCallback } from 'react';
import axios from 'axios';

const useApi = (url, token) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (params = {}) => {
      if (!token) return;
      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
            'Accept': '*/*',
          },
          params,
        });
        setData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    },
    [url, token]
  );

  return { data, loading, error, fetchData };
};

export default useApi;



