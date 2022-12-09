import { useEffect } from "react";
import Router from "next/router";
import { useQueryClient, useQuery } from "react-query";

const useUser = () => {
  const queryClient = useQueryClient();
  const query = useQuery("user");
};

export default useUser;
