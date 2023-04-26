import useSWR from "swr";
import { IGetReservationsResponse } from "../util/types";
import { useState } from "react";

const getReservations = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch reservations");
  }

  return response.json();
};

const useReservations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: reservationsData,
    mutate,
    isLoading,
    error,
  } = useSWR<IGetReservationsResponse>(
    `/api/reservations/search?q=${searchQuery}`,
    getReservations
  );

  const executeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return {
    reservations: reservationsData?.reservations || [],
    mutate,
    isLoading,
    error,
    executeSearch,
    clearSearch,
  };
};

export default useReservations;
