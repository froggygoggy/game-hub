import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig, //übergibt zusätzliche Parameter an das Backend
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      // console.log("start loading");

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          // in der rawg-API sind z.B. bei Games, Genre-parameter erlaubt.
          //  diese werden hier übergeben
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
          // console.log("finished loading");
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
          // console.log("finished loading");
        })
        .finally(() => {});

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
