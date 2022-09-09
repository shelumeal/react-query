import { useQuery } from "react-query";
import axios from "axios";

const fetchHero = (heroId) => {
  //const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

export const useSuperHeroDetail = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchHero(heroId));
};
