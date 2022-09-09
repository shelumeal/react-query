import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperheroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetchHeroes,
  //   {
  //     // cacheTime:5000,
  //     // staleTime: 30000,
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: true,
  //     // refetchInterval:2000,
  //     // refetchIntervalInBackground:true
  //     enabled: false,
  //     onSuccess: onSuccess,
  //     onError: onError,
  //     // select: (data) => {
  //     //   const superHeroName = data?.data.map((hero) => hero.name);
  //     //   return superHeroName;
  //     // },
  //   }
  // );

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
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
}

export default RQSuperheroesPage;
