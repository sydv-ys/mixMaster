import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

export const loader = async () => {
  const searchTerm = "";
  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: resp.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
