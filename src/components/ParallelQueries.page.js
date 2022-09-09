import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueriesPage() {
  const { data: superHeroes } = useQuery("super-heroes", fetchHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesPage</div>;
}

export default ParallelQueriesPage;
