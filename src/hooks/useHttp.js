import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendHttpRequest = useCallback(
    async (requestConfig, responseCallback) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        if (!response.ok) {
          throw new Error("Could not fetch courses! Please try again.");
        }

        const data = await response.json();

        responseCallback(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendHttpRequest };
};

export default useHttp;
