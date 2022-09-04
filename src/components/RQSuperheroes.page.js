import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

function RQSuperheroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchHeroes,
    {
      // cacheTime:5000,
      // staleTime: 30000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      // refetchInterval:2000,
      // refetchIntervalInBackground:true
      enabled: false,
      onSuccess: onSuccess,
      onError: onError,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}

export default RQSuperheroesPage;
