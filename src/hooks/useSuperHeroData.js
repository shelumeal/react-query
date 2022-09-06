import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchHeroes, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroName = data.data.map((hero) => hero.name);
      return superHeroName;
    },
  });
};
